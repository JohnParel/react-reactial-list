'use client'  
import 'primereact/resources/themes/lara-dark-purple/theme.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';                                   // css utility

import React, { useState, useEffect } from 'react'; 
import { Galleria, GalleriaResponsiveOptions } from 'primereact/galleria';
import { PhotoService } from '@/app/Service/PhotoService';
import { useRouter } from 'next/navigation';    
import NavigationBar from '@/app/page';  
import { Skeleton } from 'primereact/skeleton';

export default function Home() {
    const router = useRouter();
    
    const [images, setImages] = useState(null)
    const responsiveOptions: GalleriaResponsiveOptions[] = [
        {
            breakpoint: '991px',
            numVisible: 4,
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }
    return (
        <main>
            <div className="card">
            <NavigationBar></NavigationBar>
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '1200px'}} class="mt-3 mx-auto" 
                item={itemTemplate} thumbnail={thumbnailTemplate} circular autoPlay transitionInterval={2000} />
            <h1 class="text-2xl text-center">In this page I didn't change the picture because I have to edit all image</h1>
        </div>
        </main>
    )
}

     
         