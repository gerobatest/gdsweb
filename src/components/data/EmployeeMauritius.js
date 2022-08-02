import { v4 as uuidv4 } from "uuid";

const EmployeeMauritius = [
    {
        id: uuidv4(),
        nom: 'John Doe', 
        position: 'Directeur Exécutif', 
        mail: 'john@groupe-gds.eu',
        couleurMail: '#82368C',
        imgPath: '/man2.png'
    },
    {
        id: uuidv4(),
        nom: 'Jane Doe', 
        position: 'Responsable Entreprise', 
        mail: 'jane@groupe-doe.eu ',
        couleurMail: '#82368C',
        imgPath: '/woman.png'
    },
    {
        id: uuidv4(),
        nom: 'John Doe', 
        position: 'Développeur Team Lead', 
        mail: 'jt.rakotondrazafy@doe.eu',
        couleurMail: '#82368C',
        imgPath: '/man3.png'
    },
    {
        id: uuidv4(),
        nom: 'Jane Doe', 
        position: 'Développeur', 
        mail: 'jane@doe-mu.com',
        couleurMail: '#82368C',
        imgPath: '/woman.png'
    },
    {
        id: uuidv4(),
        nom: 'John Doe', 
        position: 'QA Tester', 
        mail: 'john@doe-mu.com',
        couleurMail: '#82368C',
        imgPath: '/man3.png'
    }
];


export default EmployeeMauritius;
