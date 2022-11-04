<!DOCTYPE html>

<!--To use this site please click on the search button, then choose a country,
scroll down then choose a state, then a city and finally you will see the
weather and pollution data.-->

<html>

    <head>

    <title>IQAIR</title>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

    <link rel='stylesheet' href='./IQAIR_API.css'>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <script src="./IQAIR_API.js" defer></script>



    </head>

    <div id="wrap">

        <header>

            <h2>            
                IQAIR
            </h2>


        </header>


        <body>

            <main>
                <div class="forms">
                    <form id="searchSByC">
                        Get all avaible countries
                        <input type='submit' id='submit' value='search' class='buttoN'>
                    </form>


                </div>


                <h1 id="country_title">Country avaible for data:</h1>
                <div id="resp_country" class="container"></div>

                <h1 id="state_title">State avaible for data:</h1>
                <div id="resp_state" class="container"></div>

                <h1 id="city_title">City avaible for data:</h1>
                <div id="resp_city" class="container"></div>

                <h1 id="data_title">Data:</h1>
                <div id="resp_data" class="container"></div>

            </main>


        </body>

        <footer>
            <p>    
            Realizzato da Gianluca Trovato.<br/>
            Matricola: O46002295.
            </p>
        </footer>

    </div>


</html>