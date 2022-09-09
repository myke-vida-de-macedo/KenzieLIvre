import { CardProductStyled } from "./style"
import { Information } from "./style";

interface IPropsCardProduct {
    id:number,
    src:string,
    alt:string,
    lastValue:number,
    currentValue:number,
    description:string
}

const CardProduct = ( { id, src, alt, lastValue, currentValue, description }:IPropsCardProduct ) => {

    return(
        <CardProductStyled to={`/home:${id}`}>
            <figure className="block">
                <img className="block__image" src={src} alt={alt} />
            </figure>
            <Information >
                <span>
                    <p className="information__lastValue">R$ {lastValue}</p>
                    <p className="information__currentValue">R$ {currentValue}</p>
                </span>
                <p className="information__product">{description}</p>
            </Information>
        </CardProductStyled>
    )
}

export default CardProduct