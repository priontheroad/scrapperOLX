const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const fs = require('fs');


const transporter = nodemailer.createTransport(
    sendgridTransport({
        auth: {
            api_key: ''


        }
    })
);

const excluirRelatório = () => {
    try {

        fs.unlinkSync('./index.html');
        console.log('Coleta finalizada. Arquivo html gerado na raíz do projeto foi excluído.');

    } catch (error) {

        console.log('Erro na exclusão do relatório html: ' + error)
    }
}

const envioEmail = () => {
    transporter.sendMail({
        to: 'pr.floriano88@gmail.com',
        from: 'priscila@priscilafloriano.eti.br',
        subject: 'Coleta de amostras OLX',
        html: ({ path: './index.html' }),
    })
};

const main = async () => {
    await envioEmail();
    await excluirRelatório();
}

main();