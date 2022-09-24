import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss'

function FiltroImoveis() {

    return (
    <>
        <div className='container blue col-lg-6 col-sm-12'>
   
            <h4 className='d-flex justify-content-center mb-4'>Procurar Imóvel - Filtros</h4>
   
            <form className='container col-sm-12 col-lg-8'>
                    <div className="mb-3">
                        <label htmlFor="labelFaixaPreco" className="form-label text">Faixa de Preço:</label>
                        
                            <table>
                                <tr>
                                    <td><label htmlFor="labelMenorValor">De:  </label></td>
                                    <td><input type="number" className="form-control" /></td>
                                    <td><label htmlFor="labelMaiorValor">Até:  </label></td>
                                    <td><input type="number" className="form-control" /></td>        
                                </tr>
                            </table>
                                
                    </div>

                    <div className="mb-3">
                        <label htmlFor="labelBairro" className="form-label text">Bairro</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="labelTipoMoradia" className="form-label text">Tipo de Moradia:</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="inputRadio" id="inputRadioCasa" value="casa" checked />
                            <label className="form-check-label" htmlFor="labelTipoMoradiaCasa">
                                Casa
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="inputRadio" id="inputRadioApto" value="apartamento"/>
                            <label className="form-check-label" htmlFor="labelTipoMoradiaApto">
                                Apartamento
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="inputRadio" id="inputRadioCasaEApto" value="casaEapto" />
                            <label className="form-check-label" htmlFor="labelTipoMoradiaAmbos">
                                Ambos
                            </label>
                        </div>

                    </div>

                    <div className='mb-3'>
                        <label htmlFor="labelAceitaMorarSexos" className="form-label text">Aceita morar com:</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="inputRadio2" id="inputRadioHomensEMulheres" value="homensemulheres" checked />
                            <label className="form-check-label" htmlFor="labelAceitaMorarAmbos">
                                Ambos os sexos
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="inputRadio2" id="inputRadioHomens" value="homens"/>
                            <label className="form-check-label" htmlFor="labelAceitaMorarHomens">
                                Apenas Homens
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="inputRadio2" id="inputRadioMulheres" value="mulheres" />
                            <label className="form-check-label" htmlFor="labelAceitaMorarMulheres">
                            Apenas Mulheres
                            </label>
                        </div>

                    </div>

                    <div className='mb-3'>
                        <div>
                            <label htmlFor="labelAceitaMorarSexos" className="form-label text">Aceita animais?</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioAnimaisSim" value="aceitaAnimaisSim" checked/>
                            <label className="form-check-label" htmlFor="inlineRadioSim">Sim</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioAnimaisNao" value="aceitaAnimaisNao"/>
                            <label className="form-check-label" htmlFor="inlineRadioNao">Não</label>
                        </div>

                    </div>

                    <div className='mb-3'>
                        <div>
                            <label htmlFor="labelCaracteristicasQuarto" className="form-label text">Características do Quarto:</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioQuarto" id="inlineRadioQuartoIndividual" value="quartoIndividual" checked/>
                            <label className="form-check-label" htmlFor="inlineRadioIndividual">Individual</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioQuarto" id="inlineRadioQuartoCompartilhado" value="quartoCompartilhado"/>
                            <label className="form-check-label" htmlFor="inlineRadioCompartilhado">Compartilhado</label>
                        </div>

                    </div>

                    <div className='btn-group'>
                        <div className="col-lg-12 text-left">
                            <button type="submit" className="botao brown">Cancelar</button>
                        </div>                 

                        <div className="col-lg-12 text-right">
                            <button type="submit" className="botao green">Filtrar</button>
                        </div>
                        
                    </div>    


                </form>

        </div>
    </>
    );
}

export default FiltroImoveis;