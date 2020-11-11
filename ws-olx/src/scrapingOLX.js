/**
 * Site: https://pr.olx.com.br/
 * nome: 
 * valor:
 * descrição:
 * categoria:
 * tipo:
 * tamanho:
 * cep:
 * município:
 * bairro:
 * anunciante:
 * data publicação:
 * 
 * 
 * Autor(a): Priscila Floriano
 * Curitiba - PR
 * 
 * 
 */

const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const site = 'https://www.olx.com.br/imoveis';
const dados = [];



const dadosBrutos = async () => {
    try {

        let cheerioArgs = [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--enable-features=NetworkService',
            '--window-size=1920,1080', 
        ];

 


        const res = await axios.get(site);
        console.log('Visitando páginas da Web...');
        console.log(cheerioArgs);

        return res.data;


    } catch (error) {
     
        console.log('Erro ao coletar dados da página de anúncio');
        console.log(error);
        
    }
};


const listaLinks = async () => {
    const html = await dadosBrutos();
    const $ = await cheerio.load(html);
    $('.fnmrjs-0').each(function (i, a) {
        dados[i] = $(a).attr('href');

    });
   // console.log(dados)
   return dados;
};
const lnkfilho = 'https://rj.olx.com.br/rio-de-janeiro-e-regiao/imoveis/compre-seu-ape-em-sg-e-niteroi-com-apenas-r-400-de-entrada-810149498'

const coletaDados = async (pg) =>{
    try{
        const res = await axios.get(pg);
        const html = res.data;
        const $ = await cheerio.load(html);

        //campos a serem pesquisados



        let nome = $('#content > div.sc-18p038x-3.dSrKbb > div > div.sc-bwzfXH.h3us20-0.cBfPri > div.duvuxf-0.h3us20-0.jAHFXn > div.h3us20-5.bMEQVr > h1').text();
        let valor = $('#content > div.sc-18p038x-3.dSrKbb > div > div.sc-bwzfXH.h3us20-0.cBfPri > div.duvuxf-0.h3us20-0.jAHFXn > div.h3us20-5.ezwEJi > div > div > div.sc-hmzhuo.sc-1wimjbb-2.dghGmZ.sc-jTzLTM.iwtnNi > div > h2').text();
        let descricao = $('#content > div.sc-18p038x-3.dSrKbb > div > div.sc-bwzfXH.h3us20-0.cBfPri > div.duvuxf-0.h3us20-0.jAHFXn > div.h3us20-5.cgTGW > div > div.sc-1sj3nln-0.eSLnCp > div > p > span').text();
        let categoria = $('#content > div.sc-18p038x-3.dSrKbb > div > div.sc-bwzfXH.h3us20-0.cBfPri > div.duvuxf-0.h3us20-0.jAHFXn > div.h3us20-5.hdKTOm > div > div.sc-bwzfXH.h3us20-0.cBfPri > div:nth-child(1) > div > a').text();
        let tipo = $('#content > div.sc-18p038x-3.dSrKbb > div > div.sc-bwzfXH.h3us20-0.cBfPri > div.duvuxf-0.h3us20-0.jAHFXn > div.h3us20-5.hdKTOm > div > div.sc-bwzfXH.h3us20-0.cBfPri > div:nth-child(2) > div > a').text();
        let banheiros = $('#content > div.sc-18p038x-3.dSrKbb > div > div.sc-bwzfXH.h3us20-0.cBfPri > div.duvuxf-0.h3us20-0.jAHFXn > div.h3us20-5.hdKTOm > div > div.sc-bwzfXH.h3us20-0.cBfPri > div:nth-child(5) > div > dd').text();
        let condominio = $('#content > div.sc-18p038x-3.dSrKbb > div > div.sc-bwzfXH.h3us20-0.cBfPri > div.duvuxf-0.h3us20-0.jAHFXn > div.h3us20-5.hdKTOm > div > div.sc-bwzfXH.h3us20-0.cBfPri > div:nth-child(3) > div > dd').text();
        let area_construida = $('#content > div.sc-18p038x-3.dSrKbb > div > div.sc-bwzfXH.h3us20-0.cBfPri > div.duvuxf-0.h3us20-0.jAHFXn > div.h3us20-5.hdKTOm > div > div.sc-bwzfXH.h3us20-0.cBfPri > div:nth-child(3) > div > dd').text();
        let area_util = $('#content > div.sc-18p038x-3.dSrKbb > div > div.sc-bwzfXH.h3us20-0.cBfPri > div.duvuxf-0.h3us20-0.jAHFXn > div.h3us20-5.hdKTOm > div > div.sc-bwzfXH.h3us20-0.cBfPri > div:nth-child(3) > div > dd').text();
        let quartos = $('#content > div.sc-18p038x-3.dSrKbb > div > diiv.sc-bwzfXH.h3us20-0.cBfPri > div.duvuxf-0.h3us20-0.jAHFXn > div.h3us20-5.hdKTOm > div > div.sc-bwzfXH.h3us20-0.cBfPri > div:nth-child(4) > div > a').text();
        let vaga_garagem = $('#content > div.sc-18p038x-3.dSrKbb > dv > div.sc-bwzfXH.h3us20-0.cBfPri > div.duvuxf-0.h3us20-0.jAHFXn > div.h3us20-5.hdKTOm > div > div.sc-bwzfXH.h3us20-0.cBfPri > div:nth-child(6) > div > dd').text();
        let detalhes_imovel = $('#content > div.sc-18p038x-3.dSrKbb > div > div.sc-bwzfXH.h3us20-0.cBfPri > div.duvuxf-0.h3us20-0.jAHFXn > div.h3us20-5.hdKTOm > div > div.sc-bwzfXH.h3us20-0.cBfPri > div:nth-child(7) > div > dd').text();
        let detalhes_condominio = $('#content > div.sc-18p038x-3.dSrKbb > div > div.sc-bwzfXH.h3us20-0.cBfPri > div.duvuxf-0.h3us20-0.jAHFXn > div.h3us20-5.hdKTOm > div > div.sc-bwzfXH.h3us20-0.cBfPri > div:nth-child(10) > div > dd').text();
        let cep = $('#content > div.sc-18p038x-3.dSrKbb > div > div.sc-bwzfXH.h3us20-0.cBfPri > div.duvuxf-0.h3us20-0.jAHFXn > div.h3us20-5.keidqa > div > div.sc-hmzhuo.gqoVfS.sc-jTzLTM.iwtnNi > div.sc-bwzfXH.h3us20-0.cBfPri > div:nth-child(1) > div > dd').text();
        let municipio = $('#content > div.sc-18p038x-3.dSrKbb > div > div.sc-bwzfXH.h3us20-0.cBfPri > div.duvuxf-0.h3us20-0.jAHFXn > div.h3us20-5.keidqa > div > div.sc-hmzhuo.gqoVfS.sc-jTzLTM.iwtnNi > div.sc-bwzfXH.h3us20-0.cBfPri > div:nth-child(2) > div > dd').text();
        let bairro = $('#content > div.sc-18p038x-3.dSrKbb > div > div.sc-bwzfXH.h3us20-0.cBfPri > div.duvuxf-0.h3us20-0.jAHFXn > div.h3us20-5.keidqa > div > div.sc-hmzhuo.gqoVfS.sc-jTzLTM.iwtnNi > div.sc-bwzfXH.h3us20-0.cBfPri > div:nth-child(3) > div > dd').text();
        let logradouro = $('#miniprofile > div > div.sc-gAmQfK.fcDieZ > div.sc-bIKvTM.jYmZnN.sc-jTzLTM.iwtnNi > div.sc-ckYZGd.hNvUjI.sc-jTzLTM.iwtnNi > span').text();
        let anunciante = $('#miniprofile > div > div.sc-gAmQfK.fcDieZ > div.sc-bIKvTM.jYmZnN.sc-jTzLTM.iwtnNi > div.sc-ckYZGd.hNvUjI.sc-jTzLTM.iwtnNi > span').text();
        let data_publicacao = $('#content > div.sc-18p038x-3.dSrKbb > div > div.sc-bwzfXH.h3us20-0.cBfPri > div.duvuxf-0.h3us20-0.jAHFXn > div.h3us20-5.kjgnrw > div.h3us20-3.csYflq > span').text();




        const resultado = `
        <h1>Imóvel: ${nome}</h1>
        <h2>Valor: ${valor}</h2>
        <p>Descrição: ${descricao}</p>
        <h3>Categoria: ${categoria}</h3>
        <h3>Tipo: ${tipo}</h3>
        <h3>Banheiros: ${banheiros}</h3>
        <h3>Condomínio: ${condominio}</h3>
        <h3>Área construída: ${area_construida}</h3>
        <h3>Área útil: ${area_util}</h3>
        <h3>Quartos: ${quartos}</h3>
        <h3>Vagas na garagem: ${vaga_garagem}</h3>
        <h3>Detalhes do imóvel: ${detalhes_imovel}</h3>
        <h3>Detalhes do condomínio: ${detalhes_condominio}</h3>
        <h3>CEP: ${cep}</h3>
        <h3>Município: ${municipio}</h3>
        <h3>Bairro: ${bairro}</h3>
        <h3>Logradouro: ${logradouro}</h3>
        <h3>Anunciante: ${anunciante}</h3>
        <h3>Data de publicação: ${data_publicacao}</h3>
        <h3>Link: <a href="${pg}">Link imóvel</a></h3>
        <br>
        `
        console.log(resultado);


      gravhtml(resultado);

      return {
          nome, valor, descricao, categoria, tipo, banheiros, 
          condominio, area_construida, area_util, quartos, vaga_garagem,
          detalhes_imovel, detalhes_condominio, cep, municipio, bairro, logradouro,
          anunciante, data_publicacao, pg
      }

    } catch(error){
        console.log('Houve um erro na extração de dados: '+ error);
    }
}

const gravhtml = async (result) =>{
    fs.writeFileSync('./index.html', result, {flag: 'a+'}, function(err){
        if(err)
        console.log('Erro na coleta.')

    })
}

const apresentaDados = async () =>{
    const allLinks = await listaLinks();
    allLinks.map(function(lnkfilho){
        coletaDados(lnkfilho);
    });
};

const main = async () =>{
    await apresentaDados()
}

main();