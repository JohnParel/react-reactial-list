'use client'  
import 'primereact/resources/themes/lara-dark-purple/theme.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';                                   // css utility
import NavigationBar from '@/app/page';  

import React, { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';
import { TreeNode } from 'primereact/treenode';

export default function Home() {
    const [selection, setSelection] = useState<TreeNode[]>([]);
    const [data] = useState<TreeNode[]>([
        {
            expanded: true,
            type: 'person',
            data: {
                image: 'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
                name: 'Amy Elsner',
                title: 'CEO'
            },
            children: [
                {
                    expanded: true,
                    type: 'person',
                    data: {
                        image: 'https://primefaces.org/cdn/primereact/images/avatar/annafali.png',
                        name: 'Anna Fali',
                        title: 'CMO'
                    },
                    children: [
                        {
                            label: 'Sales'
                        },
                        {
                            label: 'Marketing'
                        }
                    ]
                },
                {
                    expanded: true,
                    type: 'person',
                    data: {
                        image: 'https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png',
                        name: 'Stephen Shaw',
                        title: 'CTO'
                    },
                    children: [
                        {
                            label: 'Development'
                        },
                        {
                            label: 'UI/UX Design'
                        }
                    ]
                }
            ]
        }
    ]);

    const nodeTemplate = (node: TreeNode) => {
        if (node.type === 'person') {
            return (
                <div className="flex flex-column">
                    <div className="flex flex-column align-items-center">
                        <img alt={node.data.name} src={node.data.image} className="mb-3 w-3rem h-3rem" />
                        <span className="font-bold mb-2">{node.data.name}</span>
                        <span>{node.data.title}</span>
                    </div>
                </div>
            );
        }

        return node.label;
    };
    return (
        <main>
           <div className="grid-nogutter ">
           <NavigationBar></NavigationBar><br/>
            <h1 class="text-8xl text-center">About Us</h1><br/>
            <OrganizationChart value={data} selectionMode="multiple" selection={selection} onSelectionChange={(e) => setSelection(e.data)} nodeTemplate={nodeTemplate} />
        </div>
        </main>
    )
}

     
         