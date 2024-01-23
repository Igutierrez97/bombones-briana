import { ClassNames } from '@emotion/react';
import { ProductCard } from '../components/productSection/ProductCard';
import { Titulo } from '../components/productSection/Titulo';
import { WhatsAppButton } from '../components/WhatsAppButton';

export default function ProductSections() {
    return (
      <div className='bg-red-300'>
      <Titulo/>
      <div className='grid h-screen grid-cols-1 xl:grid-cols-6 justify-center place-items-center'>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <WhatsAppButton/>
      </div>
      </div>
        
    );
  }
