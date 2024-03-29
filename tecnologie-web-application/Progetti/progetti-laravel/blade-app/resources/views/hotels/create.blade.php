<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Nuovo hotel</title>
    @include('bootstrap')    
</head>
<body>
    <div class="container">

        <h1>Inserisci nuovo hotel</h1>

        <form method="post" action="">
            @csrf
        <div class="mb-3">
            <label for="name" class="form-label">Nome hotel</label>
            <input type="text" class="form-control" id="name" placeholder="Inserisci il nome dell'hotel" value="{{old('name')}}" name="name">
        </div>
        <div class="mb-3">
            <label for="stars" class="form-label">Stelle</label>
            <input type="text" class="form-control" id="stars" placeholder="Inserisci le stelle" value="{{old('stars')}}" name="stars">
        </div>
        <div class="mb-3">
            <label for="address" class="form-label">Indirizzo</label>
            <input type="text" class="form-control" id="address" placeholder="Inserisci l'indirizzo dell'hotel" value="{{old('address')}}"  name="address">
        </div>

        <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" value="" id="all_year" name="all_year" @checked(old('all_year')) >
            <label class="form-check-label" for="all_year">
              Aperto tutto l'anno
            </label>
        </div>

        <a href="/hotels" class="btn btn-secondary">Indietro</a>

        <button type="submit" class="btn btn-primary">Salva</button>

        </form>

        @if($errors->any())
        <div class="alert alert-danger mt-3">
            <ul>
                @foreach($errors->all() as $error)
                    <li>{{$error}}</li>
                @endforeach
            </ul>
        </div>
            ci sono errori di vlidazione
        @endif
    </div>

    @include('footer')
</body>
</html>

