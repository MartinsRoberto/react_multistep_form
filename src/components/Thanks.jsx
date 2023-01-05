import React from 'react'
import './Thanks.css'

const Thanks = ({data}) => {
  return (
    <div className="thanks">
      <h2>Falta pouco...</h2>
      <p>
        A sua opinião é muito importante, em breve você receberá um cupom de 10%
        de desconto para a sua próxima compra.
      </p>
      <p>Para concluir sua avaliação clique no botão de Enviar abaixo.</p>
      <p className="review-data">
        Satisfação com o produto: {data.review}
      </p>
      <p className="review-data">
        Comentário: {data.comment}
      </p>
    </div>
  )
}

export default Thanks