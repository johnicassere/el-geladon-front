import { Api } from "helpers/Api";

const parseResponse = (response) => response.json();



export const PaletaService = {

    getLista: () => fetch(Api.paletaLista(), {method: 'GET'}).then(parseResponse),
    getById: (id) => fetch(Api.paletaLista(id), {method: 'GET'}).then(parseResponse),
    create: () => fetch(Api.paletaLista(), {method: 'POST'}).then(parseResponse),
    updateById: (id) => fetch(Api.paletaLista(id), {method: 'PUT'}).then(parseResponse),
    deleteById: (id) => fetch(Api.paletaLista(id), {method: 'DELETE'}).then(parseResponse),
    
}