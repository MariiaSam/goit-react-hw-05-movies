import { ButtonLoad } from './Button.styled';

export const Button = ({ onLoadMore }) => {

return (
    <ButtonLoad type='submit' onClick={onLoadMore}> Load More</ButtonLoad>
    )
}