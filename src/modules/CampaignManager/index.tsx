import React, { useContext } from 'react'
import { LanguageContext } from '@shared/Context/Language';
interface Props {
    
}

const CampainManager = (props: Props) => {
    const { language } = useContext(LanguageContext);
    return (
        <div>
          <h1>Day la CampainManager</h1>
      </div>
    )
}

export default CampainManager