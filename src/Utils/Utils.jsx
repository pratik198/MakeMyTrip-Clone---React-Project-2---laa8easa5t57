export default function ratingRemark(rating){
        if(rating >= 4.5 && rating<=5){
                return "Excellent";

        }else if(rating >= 4 && rating<4.5){
                return "Very Good";
        }else if(rating >= 3.5 && rating<4){
                return "Good";
        }else if(rating >= 3 && rating<3.5){
                return "Average";
        }else{
                return "";
        }
}


