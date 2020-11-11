/**
 * 
 * @param {
 * pagina, negocio, regiao, bairro,  uf
 * }
 * 
 * config 
 * retorno https://www.olx.com.br/imoveis/venda/apartamentos?o=${config.pagina}
 */

 const urlBuilder = (config) =>{
     const baseUrl = `https://${config.uf}.www.olx.com.br/`;
     const path = `${config.regiao}/${config.bairro}/${config.tipo}`;
     return baseUrl + path;


 }

 module.exports = urlBuilder;