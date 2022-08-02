import { v4 as uuidv4 } from "uuid";

const EmployeeReunion = [
    {
        id: uuidv4(),
        nom: 'John Doe', 
        position: 'Directeur Exécutif', 
        mail: 'john@groupe-gds.eu',
        couleurMail: '#00B1AA',
        imgPath: '/woman2.png'
    },
    {
        id: uuidv4(),
        nom: 'Jane Doe', 
        position: 'Responsable Entreprise', 
        mail: 'jane@groupe-doe.eu ',
        couleurMail: '#00B1AA',
        imgPath: '/woman.png'
    },
    {
        id: uuidv4(),
        nom: 'John Doe', 
        position: 'Développeur Team Lead', 
        mail: 'jt.rakotondrazafy@doe.eu',
        couleurMail: '#00B1AA',
        imgPath: '/man3.png'
    },
    {
        id: uuidv4(),
        nom: 'Jane Doe', 
        position: 'Développeur', 
        mail: 'jane@doe-mu.com',
        couleurMail: '#00B1AA',
        imgPath: '/woman.png'
    },
    {
        id: uuidv4(),
        nom: 'John Doe', 
        position: 'QA Tester', 
        mail: 'john@doe-mu.com',
        couleurMail: '#00B1AA',
        imgPath: '/man2.png'
    }
];


export default EmployeeReunion