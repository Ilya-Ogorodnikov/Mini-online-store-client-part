import { FC, useState } from 'react';
import {
  AppBar,
  Badge,
  Box,
  Button,
  TextField,
  Toolbar,
  Typography
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { Favorite, ShoppingBag } from '@mui/icons-material';
import { SearchResult } from '..';
import { useTypedSelector, useActions } from '../../hooks';
import { IHeaderProps } from '../../models';
import * as img from '../../assets';
import { styles } from './style';

const Header: FC<IHeaderProps> = ({ titleLink, pathLink }) => {
  const { isAuth } = useTypedSelector(state => state.auth);
  const { favoriteProducts, productsInBag } = useTypedSelector(state => state.product);
  const [openSearchResult, setOpenSearchResult] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { logOut } = useActions();
  const location = useLocation();

  return (
    <Box sx={styles.headerWrapper}>
      <AppBar
        position="sticky"
        sx={styles.headerAppBar}
      >
        <Toolbar sx={styles.headerToolBar}>
          <Link to='/'>
            <img
              src={img.logo}
              alt="logo"
              height="40px"
            />
          </Link>

          {isAuth && (
            <>
              <TextField
                id="search"
                label="Search..."
                variant="outlined"
                size="small"
                sx={styles.searchBar}
                onChange={(e) => {
                  if (e.target.value.length > 2) {
                    setSearchTerm(e.target.value);
                    setOpenSearchResult(true);
                  }

                  if (e.target.value.length < 3) {
                    setOpenSearchResult(false)
                  }
                }}
              />
              {openSearchResult &&
                <SearchResult
                  searchTerm={searchTerm}
                />
              }
            </>
          )}

          <Box sx={styles.headerActions}>
            {
              location.pathname === "/favorite" &&
              <Link to={{ pathname: '/shopping-bag' }}>
                <Badge
                  color="error"
                  badgeContent={productsInBag.length}
                  sx={styles.headerBadge}
                >
                  <ShoppingBag sx={styles.headerIcon} />
                </Badge>
              </Link>
            }
            {
              location.pathname === "/shopping-bag" &&
              <Link to={{ pathname: '/favorite' }}>
                <Badge
                  color="error"
                  badgeContent={favoriteProducts.length}
                  sx={styles.headerBadge}
                >
                  <Favorite sx={styles.headerIcon} />
                </Badge>
              </Link>
            }
            {
              location.pathname !== "/login" &&
              location.pathname !== "/sign-up" &&
              location.pathname !== "/shopping-bag" &&
              location.pathname !== "/favorite" &&
              <Box sx={styles.headerIconsGroup}>
                <Link to={{ pathname: "/favorite" }}>
                  <Badge
                    color="error"
                    badgeContent={favoriteProducts.length}
                    sx={styles.headerBadge}
                  >
                    <Favorite sx={styles.headerIcon} />
                  </Badge>
                </Link>

                <Link to={{ pathname: "/shopping-bag" }}>
                  <Badge
                    color="error"
                    badgeContent={productsInBag.length}
                    sx={styles.headerBadge}
                  >
                    <ShoppingBag sx={styles.headerIcon} />
                  </Badge>
                </Link>
              </Box>
            }

            <Typography
              variant="h6"
              component="p"
            >
              {
                isAuth ? (
                  <Button
                    variant="text"
                    sx={{ ...styles.headerLink, textTransform: "capitalize" }}
                    onClick={logOut}
                  >
                    Выйти
                  </Button>
                ) : (
                  <Link
                    style={styles.headerLink}
                    to={{ pathname: pathLink }}
                  >
                    {titleLink}
                  </Link>
                )
              }
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
