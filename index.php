<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/css/style.css">
    <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
    <link href="https://fonts.maateen.me/charukola-ultra-light/font.css" rel="stylesheet">
    <!-- <script src="assets/js/icons.js"></script> -->
    <title>CC-Bsale</title>
</head>

<body>

    <nav class="navbar navbar-light fixed-top">
        <div class="container-fluid">
            <button id="sidebarCollapse" class="btn btn-outline-light d-flex align-items-center">
                <ion-icon name="menu-outline" size="large"></ion-icon>
            </button>

            <a class="navbar-brand float-start" href="#">
                <h3 id="logo">Bsale Test</h3>
            </a>
            <form id="formSearch" class="d-flex">
                <input id="inputProduct" class="form-control me-2" type="Buscar" placeholder="Buscar" aria-label="Buscar">
                <button id="btnProduct" class="btn btn-outline-secondary" type="submit"><ion-icon name="search-outline"></ion-icon></button>
            </form>
        </div>
        <!-- <div class="d-flex">
            <div class="col-12 col-sm-6 d-flex">
                <button id="sidebarCollapse" class="btn btn-outline-light d-flex align-items-center">
                    <ion-icon name="menu-outline" size="large"></ion-icon>
                </button>

                <a class="navbar-brand" href="">
                    <h3 id="logo">Bsale Test</h3>
                </a>
            </div>
            <div class="col-12 col-sm-6">
                <form class="d-flex">
                    <input id="inputProduct" class="form-control me-2" type="Buscar" placeholder="Buscar" aria-label="Buscar">
                    <button id="btnProduct" class="btn btn-outline-secondary" type="submit"><ion-icon name="search-outline"></ion-icon></button>
                </form>
            </div>
        </div> -->


        <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          <form class="d-flex">
            <input id="inputProduct" class="form-control me-2" type="Buscar" placeholder="Buscar" aria-label="Buscar">
            <button id="btnProduct" class="btn btn-outline-secondary" type="submit"><ion-icon name="search-outline"></ion-icon></button>
        </form>
        </button> -->
        <!-- 
        <form class="d-flex">
            <input id="inputProduct" class="form-control me-2" type="Buscar" placeholder="Buscar" aria-label="Buscar">
            <button id="btnProduct" class="btn btn-outline-secondary" type="submit"><ion-icon name="search-outline"></ion-icon></button>
        </form> -->

    </nav>

    <div class="wrapper fixed-left">
        <nav id="sidebar">
            <div class="sidebar-header d-flex align-items-center justify-content-center">
                <h4>Categorías</h4>
            </div>

            <ul id="list-dynamic" class="list-unstyled">
                <template id="template-li">
                    <li>
                        <a class="sidebar_a" href="#"></a>
                    </li>
                </template>
            </ul>
        </nav>

        <div id="content">
            <div class="row" id="cards-Products">
                <div>
                    <div class="col-11 d-flex justify-content-end">
                        <div>
                            <div class="col-12 d-flex justify-content-center">
                                <ion-icon style="color:#d2d2d2; font-size: 12rem; transform: rotate(90deg);" name="arrow-undo-outline"></ion-icon>
                            </div>
                            <div class="col-12">
                                <h1 style="color:#5f5f5f;">Busca por nombre</h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <ion-icon style="color:#d2d2d2; font-size: 12rem;" name="arrow-undo-outline"></ion-icon>
                        <h1 style="color:#5f5f5f;">Filtra por categoría</h1>
                    </div>
                </div>
                <template id="template-cards">
                    <div class="mb-3 col-12 col-md-6 col-lg-4 col-xl-3">
                        <div class="shadow-sm card  m-1">
                            <div style="height: 20rem;" class="d-flex justify-content-center">
                                <img style="max-height:100%; max-width:100%;" class="m-2 p-4" alt="...">
                            </div>
                            <div class="card-body">
                                <h6 class="card-title nps nameProducts"></h6>
                                <div class="row">
                                    <div class="d-flex align-items-center">
                                        <div class="col-4">
                                            <h6 class="card-text precio"></h6>
                                        </div>
                                        <div class="col-4">
                                            <h6 class="card-text desc"></h6>
                                        </div>
                                        <div class="col-4 d-flex justify-content-end">
                                            <a href="#" class="btn">
                                                <ion-icon class="float-right" name="cart-outline" size="large"></ion-icon>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </div>

        </div>
    </div>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
    <script src="assets/js/script.js"></script>
    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--     
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
    -->
</body>

</html>