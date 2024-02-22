export function myFunction(myNum: number): string {
    if (myNum == 5) {
        return 'true';

    } else if(myNum < 5 && myNum >=0) {
        return 'false';

    }else if (myNum > 5){
        return 'big';
        
    }else {
        return 'negative';
    };
};

/* 
EN: Add your own function starting on line 20 
!Write a function that returns a movie when the user inputs movieOne - movieFive
!The movies are up to you use the 'writeIfElseStatment' example from class for help 
!Add expects to the test checking to make sure you are getting back the correct movie.
*/

export function blockBuster(movie: string): string {
    if (movie == "Movie One") {
        return "Free Guy"; 
    } else if (movie == "Movie Two") {
        return "Everything, Everywhere, All at Once";
    } else if (movie == "Movie Three") {
        return "Surf's Up"; 
    } else if (movie == "Movie Four") {
        return "Lilo and Stitch"; 
    } else if (movie == "Movie Five") {
        return "Ex Machina"; 
    } else {
        return `I'm sorry we do not carry ${movie}`; 
    }
};