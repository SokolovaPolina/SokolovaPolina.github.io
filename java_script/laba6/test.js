function hide(id){
    elem = document.getElementById(id); //находим блок div по его id, который передали в функцию
    state = elem.style.display; //смотрим, включен ли сейчас элемент
    if (state =='') {
        elem.style.display='none';//если включен, то выключаем
        // button.innerHTML = "Кнопка мыши нажата";
            
    }  
    else elem.style.display=''; //иначе - включаем
}
