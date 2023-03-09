import styled from "styled-components";

export const CardShelterContainerStyled = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

    width: 300px;
    height: 346px;
    border: 2px #00b29e solid;
    border-radius: 5px;
    display: flex;
    flex-direction: column;



.ImageShelterContainer{
    width: 300px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
}

.ImageShelter{
    height: 150px;
}

.InfoCardShelter{
    max-height: 196px;
    height: 196px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.TextCardShelter{
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-height: 93px;
    justify-content: space-evenly;
}

.ShelterName{
    font-family: 'Inter';
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    padding-top: 8px;
}

.ShelterCity{
    font-family: 'Inter';
    color: #00b29e;
    font-size: 14px;
    font-weight: 600;
    margin: 0;

}

.ButtonsCardShelter{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.ButtonAnimalsShelter{
    height: 40px;
    width: 151px;
    border-radius: 8px;
    color: #fff;
    background-color: #ff701c;
    border: none;
}

.ButtonDeleteCardShelter{
    height: 40px;
    width: 53px;
    border-radius: 8px;
    color: #fff;
    background-color: #ff701c;
    border: none;
}
`



