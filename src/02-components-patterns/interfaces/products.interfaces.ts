import { Props as ProductCardProps } from '../components/ProductCard';
import { ProductImageProps } from '../components/ProductImage';
import { ProductTitleProps } from '../components/ProductTitle';
import { ProductButtonsProps } from '../components/ProductButtons';

export interface Product{
    id: string;
    title: string;
    img?: string;
}
export interface ProductCardHOCProps{
    ({children,product}:ProductCardProps): JSX.Element;
    Title: (Props:ProductTitleProps) => JSX.Element;
    Image: (Props:ProductImageProps) => JSX.Element;
    Buttons: (Props:ProductButtonsProps) => JSX.Element;
}