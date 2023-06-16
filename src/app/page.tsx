'use client'  
import 'primereact/resources/themes/lara-dark-purple/theme.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';                                   // css utility
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';

export default function Home() {
    const items: MenuItem[] = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            url: 'http://localhost:3000/home'
        },
        {
            label: 'About',
            icon: 'pi pi-fw pi-info-circle',
            url: 'http://localhost:3000/about'
        },
        {
            label: 'List',
            icon: 'pi pi-fw pi-shopping-cart',
            url: 'http://localhost:3000/cart'
        }
    ];
    
    const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;

    return (
        <div className="card">
            <Menubar model={items} start={start} />
        </div>
    )
}

     
         