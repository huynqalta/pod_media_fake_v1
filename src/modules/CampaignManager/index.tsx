import React, { useContext } from 'react'
import {CampaignTranslateKey} from "@shared/TranslateKey/ImportTranslateKey"
import { useTranslate } from '@shared/Hook'
import { LanguageContext } from '@shared/Context/Language';
import ListGroupCode from "./components/ListGroupCode"
interface Props {
    
}

const CampainManager = (props: Props) => {
    const { language } = useContext(LanguageContext);
    return (
        <div>
        {/* <ListGroupCode
          useTranslate={useTranslate(CampaignTranslateKey)}
          language={language}
        /> */}
        <h1>Đây là campaign Code</h1>
      </div>
    )
}

export default CampainManager
