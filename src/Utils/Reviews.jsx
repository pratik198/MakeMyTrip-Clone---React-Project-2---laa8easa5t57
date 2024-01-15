export default function reviews(rating){
    if(rating >= 4.5 && rating<=5){
            return "Prime location, top-notch amenities, and great dining ";

    }else if(rating >= 4 && rating<4.5){
            return "Cozy hotel in serene area with top-notch upkeep ";
    }else if(rating >= 3.5 && rating<4){
            return "Clean, affordable, and well-maintained ";
    }else if(rating >= 3 && rating<3.5){
            return "Conveniently located, comfortable stay ";
    }else{
            return "Don't book";
    }
}