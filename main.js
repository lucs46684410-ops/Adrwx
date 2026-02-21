console.log('Hello World!');
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AutoCar - Loja de Carros</title>

<style>
body{
    font-family: Arial, sans-serif;
    margin:0;
    background:#f4f4f4;
}

header{
    background:#111;
    color:white;
    padding:15px;
    text-align:center;
}

nav{
    background:#333;
    padding:10px;
    text-align:center;
}

nav a{
    color:white;
    margin:15px;
    text-decoration:none;
    font-weight:bold;
}

nav a:hover{
    color:orange;
}

.container{
    padding:20px;
}

.carro{
    background:white;
    padding:15px;
    margin:15px;
    border-radius:10px;
    box-shadow:0px 0px 10px rgba(0,0,0,0.2);
    display:inline-block;
    width:300px;
}

.carro img{
    width:100%;
    border-radius:10px;
}

button{
    background:orange;
    border:none;
    padding:10px;
    color:white;
    cursor:pointer;
    border-radius:5px;
}

button:hover{
    background:darkorange;
}

footer{
    background:#111;
    color:white;
    text-align:center;
    padding:15px;
    margin-top:20px;
}
</style>

</head>

</metabody>

<header>
<h1>🚗 AutoCar</h1>
<p>Os melhores carros para você</p>
</header>

<nav>
<a href="#">Início</a>
<a href="#">Carros</a>
<a href="#">Contato</a>
</nav>

<div class="container">

<div class="carro">
<img src="https://via.placeholder.com/300x180">
<h3>BMW X6</h3>
<p>Motor potente, luxo e conforto.</p>
<button>Ver Detalhes</button>
</div>

<div class="carro">
<img src="https://via.placeholder.com/300x180">
<h3>Honda Civic</h3>
<p>Economia e desempenho.</p>
<button>Ver Detalhes</button>
</div>

<div class="carro>
<img src=https://via.placeholder.com/300x180>
<h3>Ford Mustang</h3>
<p>Esportivo clássico americano.</p>
<button>Ver Detalhes</button>
</div>

</div>

<footer>
<p>© 2026 AutoCar - Todos os direitos reservados</p>
</footer>
