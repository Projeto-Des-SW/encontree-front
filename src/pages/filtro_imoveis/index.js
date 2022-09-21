import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/header/index';
import './styles.scss'

function FiltroImoveis() {

    return (
    <>
        <Header/>
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
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="inputRadio" id="inputRadioCasa" value="casa" checked />
                            <label class="form-check-label" htmlFor="labelTipoMoradiaCasa">
                                Casa
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="inputRadio" id="inputRadioApto" value="apartamento"/>
                            <label class="form-check-label" htmlFor="labelTipoMoradiaApto">
                                Apartamento
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="inputRadio" id="inputRadioCasaEApto" value="casaEapto" />
                            <label class="form-check-label" htmlFor="labelTipoMoradiaAmbos">
                                Ambos
                            </label>
                        </div>

                    </div>

                    <div className='mb-3'>
                        <label htmlFor="labelAceitaMorarSexos" className="form-label text">Aceita morar com:</label>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="inputRadio" id="inputRadioHomensEMulheres" value="homensemulheres" checked />
                            <label class="form-check-label" htmlFor="labelAceitaMorarAmbos">
                                Ambos os sexos
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="inputRadio" id="inputRadioHomens" value="homens"/>
                            <label class="form-check-label" htmlFor="labelAceitaMorarHomens">
                                Apenas Homens
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="inputRadio" id="inputRadioMulheres" value="mulheres" />
                            <label class="form-check-label" htmlFor="labelAceitaMorarMulheres">
                            Apenas Mulheres
                            </label>
                        </div>

                    </div>

                    <div className='mb-3'>
                        <div>
                            <label htmlFor="labelAceitaMorarSexos" className="form-label text">Aceita animais?</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioAnimaisSim" value="aceitaAnimaisSim"/>
                            <label class="form-check-label" htmlFor="inlineRadioSim">Sim</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioAnimaisNao" value="aceitaAnimaisNao"/>
                            <label class="form-check-label" htmlFor="inlineRadioNao">Não</label>
                        </div>

                    </div>

                    <div className='mb-3'>
                        <div>
                            <label htmlFor="labelCaracteristicasQuarto" className="form-label text">Características do Quarto:</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioQuartoIndividual" value="quartoIndividual"/>
                            <label class="form-check-label" htmlFor="inlineRadioIndividual">Individual</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioQuartoCompartilhado" value="quartoCompartilhado"/>
                            <label class="form-check-label" htmlFor="inlineRadioCompartilhado">Compartilhado</label>
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