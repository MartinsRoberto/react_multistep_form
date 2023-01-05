import React from 'react'
import './Thanks.css'

const Thanks = () => {
  return (
    <div className="thanks">
      <h2>Falta pouco...</h2>
      <p>
        A sua opinião é muito importante, em breve você receberá um cupom de 10%
        de desconto para a sua próxima compra.
      </p>
      <p>Para concluir sua avaliação clique no botão de Enviar abaixo.</p>
      <p className="review-data">
        <span>Satisfação com o produto:</span>
      </p>
      <p className="review-data">
        <span>Comentário:</span>
      </p>
    </div>
  )
}

export default Thanks