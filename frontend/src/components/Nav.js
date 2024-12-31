import React from 'react'
import '../utils/i18n';
import { useTranslation } from 'react-i18next';  

const Nav = () =>{
    const { t } = useTranslation();  
    return (
        <div>
            <ul className='flex cursor-pointer'>
                <li className='mx-3 my-4 text-2xl text-white-900 hover:text-white-700 transition'>{t('home')}</li>
                <li className='mx-3 my-6 text-white-900 hover:text-white-700 transition'>{t('portfolio')}</li>
                <li className='mx-3 my-6 text-white-900 hover:text-white-700 transition'>{t('education')}</li>
                <li className='mx-3 my-6 text-white-900 hover:text-white-700 transition'>{t('experience')}</li>
                <li className='mx-3 my-6 text-white-900 hover:text-white-700 transition'>{t('about')}</li>
            </ul> 
        
        </div>
        
    )
}

export default Nav