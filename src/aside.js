function SugestaoPerfil(props){
    return(
        <>
            <div class="paginas-nome-foto">
                <a href="#"><img src={props.img} alt={props.alt}/></a>
                <div class="sugestao-paginas">
                    <a href={props.href}><h1>{props.pagina}</h1></a>
                    <p>{props.segueVc}</p>
                </div>
            </div>    
            <a href=""><h2>{props.seguir}</h2></a>
        </>
    );
}

export default function Aside(){
    return(
        <>
                <aside>
                    <div class="perfil-usuario">
                        <a href=""><img src="./mídia/perfil-usuario.jpg" alt="rock lee"/></a>
                        <div class="nome-usuario">
                            <a href=""><h1>catanarocklee</h1></a>
                            <p>RockLee</p>
                        </div>
                    </div>
                    <div class="sugestao">
                        <p>Sugestões para você</p>
                        <a href=""><h2>Ver tudo</h2></a>
                    </div>
                    <div class="sugestao-perfil">
                        <SugestaoPerfil 
                        href="#" 
                        img="./mídia/sugestao1.jpg" 
                        alt="sugestao01" 
                        pagina="bad.vibes.memes" 
                        segueVc="Segue você" 
                        seguir="Seguir" 
                        />
                    </div>
                    <div class="sugestao-perfil">
                        <SugestaoPerfil 
                        href="#" 
                        img="./mídia/sugestao2.jpg" 
                        alt="sugestao01" 
                        pagina="Microsoft" 
                        segueVc="Segue você" 
                        seguir="Seguir" 
                        />
                    </div>
                    <div class="sugestao-perfil">
                        <SugestaoPerfil 
                        href="#" 
                        img="./mídia/sugestao3.jpg" 
                        alt="sugestao03" 
                        pagina="Bitcoin Official" 
                        segueVc="Segue você" 
                        seguir="Seguir" 
                        />
                    </div>
                    <div class="sugestao-perfil">
                        <SugestaoPerfil 
                        href="#" 
                        img="./mídia/sugestao4.jpg" 
                        alt="sugestao04" 
                        pagina="Baby Doge Coin" 
                        segueVc="Segue você" 
                        seguir="Seguir" 
                        />
                    </div>
                    <div class="sugestao-perfil">
                    <SugestaoPerfil 
                        href="#" 
                        img="./mídia/sugestao5.jpg" 
                        alt="sugestao05" 
                        pagina="Shiba Inu" 
                        segueVc="Segue você" 
                        seguir="Seguir" 
                        />
                    </div>
                    <div class="informacoes">
                        <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                            Termos • Localizações • Contas mais relevantes • Hashtags • 
                            Idioma</p>
                    </div>
                    <p class="copyright">© 2021 INSTAGRAM DO FACEBOOK</p>
                </aside>
        </>
    );
}