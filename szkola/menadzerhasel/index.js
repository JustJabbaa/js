function zapisDanych(form)
{
    const login = form.login.value;
    const haslo = form.haslo.value;
    const dane = "Twój login: "+login+", Twoje hasło: "+haslo;
    window.localStorage.setItem(login, dane);
};

function odczytDanych(form) 
{
    const login = form.login.value;
    const dane = window.localStorage.getItem(login);
    document.getElementById('dane').innerHTML = dane;
};

function usunDane(form)
{
    const login = form.login.value;
    window.localStorage.removeItem(login);
}