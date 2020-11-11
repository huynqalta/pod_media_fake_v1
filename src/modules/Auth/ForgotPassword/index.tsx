import React from 'react'
import './styles.scss'
import {Col,Row,Input,Form} from 'antd'
import MenuLanguage from '../component/Language'
import { LoginTranslateKey} from '@shared/TranslateKey/ImportTranslateKey'
import ButtonComponent from '@components/commons/ButtonComponent/Button.Component'


const ForgotPassword=()=> {
    const [form]=Form.useForm();
    // const onFinish=value=>{
    //     const raw={
    //         email: value.email.trim(),
    //     };
    // }
    return (
        <Row className={"forgot-pass"}>
            <div className="bg-black">
                <Col className={"form-login text-center"}>
                    <div className={'f-flex justify-content-end'}>
                        <MenuLanguage />
                    </div>
                    <div className={"custom-title"}>
                        <label>
                            {}VD
                        </label>
                        <span>{}VD</span>
                    </div>
                    <div className={"form-input-login my-3 text-left"}>
                        <Form form={form} /*onFinish={onFinish}*/
                        className={"form-basic"} layout={"vertical"}
                        >
                            <Form.Item
                                label={"Email"}
                                name="name"
                                rules={[
                                    {required:true,message:''},
                                    {
                                        type:"email",
                                        message:''
                                    },
                                ]}
                            >
                                <Input autoComplete={"off"} />
                            </Form.Item>

                            <div className="text-center">
                                <span className="text-primary cursor-pointer">
                                    {}VD
                                </span>
                            </div>
                            <div className="d-flex justify-content-center mt-4">
                                <Form.Item>
                                    <ButtonComponent text={"SEND"} type="submid"
                                    />
                                </Form.Item>
                            </div>
                        </Form>
                    </div>
                </Col>
            </div>
        </Row>
    )
}

export default ForgotPassword;