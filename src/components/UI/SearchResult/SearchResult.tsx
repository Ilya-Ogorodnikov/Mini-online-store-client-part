import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { styles } from './style';
import { useActions, useTypedSelector, useDebounce } from '../../../hooks';
import { ISearch } from '../../../models';

const SearchResult: FC<ISearch> = ({ searchTerm }) => {
  const { products } = useTypedSelector(state => state.catalog);
  const { getProducts } = useActions();
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      getProducts(searchTerm);
    }
  }, [debouncedSearchTerm])

  return (
    <Box sx={styles.wrapper}>
      {products.length === 0 ? (
        <Typography sx={styles.text}>
          Ничего не найдено!
        </Typography>
      ) : (
        <>
          {products.map(item => (
            <Link
              key={item._id}
              to={{pathname: `/product:${item._id}`}}
              style={styles.searchlink}
            >
              <Box
                sx={styles.searchItem}
              >
                <Typography sx={styles.text}>
                  {item.title}
                </Typography>

                <Typography sx={[styles.text, styles.textBlue]}>
                  {item.price} руб.
                </Typography>
              </Box>
            </Link>
          ))}

          <Link
            to='/catalog'
            style={styles.searchlink}
          >
            <Button sx={styles.button}>Показать все</Button>
          </Link>
        </>
      )}
    </Box>
  )
}

export default SearchResult;
