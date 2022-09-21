const PaletaContext = {
    paletaEndpoint: () => `${api.baseUrl}/paletas`,
    paletaLista: () => `${PaletaContext.paletaEndpoint()}/all-paletas`,
    paletaById: (id) => `${PaletaContext.paletaEndpoint()}/one-paleta/${id}`,
    createPaleta: () => `${PaletaContext.paletaEndpoint()}/create-paleta`,
    updatePaleta: (id) => `${PaletaContext.paletaEndpoint()}/update-paleta${id}`,
    deletePaleta: (id) => `${PaletaContext.paletaEndpoint()}/delete-paleta${id}`,
}


export const api = {
    baseUrl: "https://api-elgeladon.herokuap.com",
    ...PaletaContext
}