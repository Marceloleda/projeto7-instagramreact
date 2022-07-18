export default function Header() {
    return(
        <div>
            <header>
                <div class="nome-instagram">
                    <ion-icon name="logo-instagram"></ion-icon>   
                    <div class="traco"></div>
                    <a href=""><img src="./mídia/logo 2.png" alt="nome instagram"/></a> 
                </div>
                <div class="pesquisa"><input type="text" placeholder="Pesquisar"/></div>
                <main>
                    <a href=""><ion-icon name="navigate-outline"></ion-icon></a>
                    <a href=""><ion-icon name="compass-outline"></ion-icon></a>
                    <a href=""><ion-icon name="heart-outline"></ion-icon></a>
                    <a href=""><ion-icon name="person-outline"></ion-icon></a>
                </main>
            </header>
        </div>
    );
}