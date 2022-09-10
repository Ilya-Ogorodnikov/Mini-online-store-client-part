import {
  Box,
  Button,
  CircularProgress
} from '@mui/material'
import { Bar} from 'react-chartjs-2'
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js'; 
import { useEffect, useState } from 'react';
import { ICategories, IProduct } from '../../models';
import { getAllCategories, getProductsOfSelectCategory } from '../../services/product-service';
import { api } from '../../api';
Chart.register(CategoryScale);

const Charts = () => {
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [productOfSelectCategory, setProductOfSelectCategory] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getElementsOnStartPage();
  }, []);
  
  const getElementsOnStartPage = async () => {
    setIsLoading(true);
    const allCategories = await getAllCategories();
    const productsOfSelectCategory = await getProductsOfSelectCategory(allCategories.data[0]._id);
    setCategories(allCategories.data);
    setProductOfSelectCategory(productsOfSelectCategory.data);
    setIsLoading(false);
  };

  const selectCategory = async (id: string) => {
    const productOfSelectCategory = await api.get(`client/start/products?categoryId=${id}`);
    setProductOfSelectCategory(productOfSelectCategory.data);
  };
  

  if (isLoading) {
    return (
      <CircularProgress />
    );
  };

  return (
    <Box sx={{width: '100%', height: '100%'}}>
      <Box sx={{width: '700px', display: 'flex', alignItems: 'center', gap: 2, margin: '0 auto'}}>
        <Bar
          options= {{
            plugins: {
              tooltip: {
                callbacks: {
                  title: (context) => productOfSelectCategory?.find(item => item.title.slice(0, 20) === context[0].label)?.title!,
                  label: (context) => `Цена ${productOfSelectCategory?.find(item => item.price === context.dataset.data[context.dataIndex])?.price}`
                },
              }
            }
          }}
          data={{
            labels: productOfSelectCategory?.map(item => item.title.slice(0, 20)),
            datasets: [{
              label: 'Цена товаров по категории',
              data: productOfSelectCategory?.map(item => item.price),
              backgroundColor: 'rgb(75, 192, 192)',
            }],
          }}
        />

        <Box sx={{display: 'flex', gap: 2, flexDirection: 'column'}}>
          {
            categories?.map(item =>
              <Button 
                onClick={() => selectCategory(item._id)}
                key={item._id}
                variant="contained"
              >
                {item.title}
              </Button>
            )
          }
        </Box>
      </Box>
    </Box>
  )
}

export default Charts