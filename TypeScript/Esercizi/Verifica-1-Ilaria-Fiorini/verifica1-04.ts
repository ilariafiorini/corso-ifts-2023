function convertiInLinguaNumeroX(n: number, locale :string) {
    if(locale === "it"){
        switch (n){
            case 0: {
                return "zero";
                break;
            }
            case 1: {
                return "uno";
                break;
            }
            case 2: {
                return "due";
                break;
            }
            case 3: {
                return "tre";
                break;
            }
            case 4: {
                return "quattro";
                break;
            }
            case 5: {
                return "cinque";
                break;
            }
            case 6: {
                return "sei";
                break;
            }
            case 7: {
                return "sette";
                break;
            }
            case 8: {
                return "otto";
                break;
            }
            case 9: {
                return "nove";
                break;
            }
        }
    }
    if(locale === "en"){
        switch (n){
            case 0: {
                return "zero";
                break;
            }
            case 1: {
                return "one";
                break;
            }
            case 2: {
                return "tewo";
                break;
            }
            case 3: {
                return "tthree";
                break;
            }
            case 4: {
                return "four";
                break;
            }
            case 5: {
                return "five";
                break;
            }
            case 6: {
                return "six";
                break;
            }
            case 7: {
                return "seven";
                break;
            }
            case 8: {
                return "eight";
                break;
            }
            case 9: {
                return "nine";
                break;
            }
        }
    }
}