import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss'

function PerfilUsuario() {

    const nome = 'Ana Júlia'; //Pegamos esses valores da API
    const sexo = 'F';
    const sobre = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id nulla finibus, bibendum ex cursus, dictum arcu. Sed sollicitudin, dui et fermentum sagittis.'
    const tags = 'gosta de gatos, não aceita fumantes, tranquila'
    const preferencias = 'Manter a moradia limpa é essencial, não gosto de bagunça'
    const img_url = 'https://anagiovanna.com.br/blog/wp-content/uploads/2022/01/foto-para-perfil-do-whatsapp-21.jpg'

    return (
    <>

        <div className='container blue col-lg-6 col-sm-12'>
            <div>
                <button type="submit" className="botao_voltar">Voltar</button>

            </div>

            <div className='icon'>
            <span className = "img_circle">
                <img src={img_url} width='100' height='100' className="bi bi-person-circle" alt='Imagem perfil'/>
                </span>
            </div>

            <div className='container col-sm-12 col-lg-8 text-center'>
                
                <div className='icon'>
                    <h3 className='espaco_svg'>{sexo === 'M' ? 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-gender-male" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2H9.5zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
                            </svg>  
                            : 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-gender-female" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5z"/>
                            </svg>}
                            
                    </h3><h3>{nome}</h3>
                
                </div>

                
                <h6 className='card-text text-center'>Sobre</h6>
                <p>{sobre}</p>

                <h6>Tags</h6>
                <p className='tags'>{tags}</p>

                <h6>Preferências</h6>
                <p className='espaco_bottom'>{preferencias}</p>

                <button type="submit" className="botao white">Conversar</button>
            </div>


        </div>
    </>
    );
}

export default PerfilUsuario;