import React, { useState } from "react";
import { BrowserRouter as router, Route, Link } from 'react-router-dom';
import { Form, FormGroup, Dropdown, Input, Card, CardImg, DropdownToggle, DropdownMenu, label, Button } from "reactstrap";
import axios from 'axios';
import * as yup from 'yup';




const OrderForm = () => {
    const [DropDownOpen, setDropDownOpen] = useState(false);
    const toggle = () => setDropDownOpen((prevState) => !prevState);
    const [formData, setFormData] = useState({
        name: '',
        number: 0,
        sauce: '',
        meat: '',
        cilantro: false,
        whiteOnion: false,
        lime: false,
        avacado: false,
        special: ''
    });

    const onInputChange = (e) => {
        // e.persist()
        // validateChange(e)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleToppings = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.checked
        });
    };

    const formSchema = yup.object().shape({
        name: yup.string().required(),
        number: yup.number().required().positive().integer().min(1),
        sauce: yup.string().required(),
        meat: yup.string().required(),
        special: yup.string(),
        cilantro: yup.boolean(),
        whiteOnion: yup.boolean(),
        lime: yup.boolean(),
        avacado: yup.boolean()
    });
    const submit = () => {
        formSchema.validate(formData)
            .then(() => {
                axios.post('https://reqres.in/', formData)
                    .then((res) => {
                        console.log('This is your posted data', res.data)
                    })
            })
    }

    return (
        <>
            <Card color='info'>
                <h2 style={{ color: 'white', margin: '0 auto' }}>
                    Build Your Own Taco!
                </h2>
                <CardImg style={{ width: '80%', margin: '0 auto' }} src={require('./assets/taco-2.jpg')} />
            </Card>
            <Form onSubmit={(e) => {
                e.preventDefault();
                submit();
            }} style={{ margin: '5%' }}>
                <FormGroup>
                    <legend>Name</legend>
                    <Input type='name' name='name' value={formData.name} onChange={onInputChange} />
                </FormGroup>
                <FormGroup>
                    <Dropdown isOpen={DropDownOpen} toggle={toggle}>
                        <DropdownToggle caret>
                            {formData.number === 0 ? 'Number of Tacos' : formData.number}
                        </DropdownToggle>
                        <DropdownMenu>
                            <div onClick={() => {
                                toggle();
                                setFormData({ number: 0 })
                            }}>0</div>
                            <div onClick={() => {
                                toggle();
                                setFormData({ number: 1 })
                            }}>1</div>
                            <div onClick={() => {
                                toggle();
                                setFormData({ number: 2 })
                            }}>2</div>
                            <div onClick={() => {
                                toggle();
                                setFormData({ number: 3 })
                            }}>3</div>
                            <div onClick={() => {
                                toggle();
                                setFormData({ number: 4 })
                            }}>4</div>
                        </DropdownMenu>
                    </Dropdown>
                </FormGroup>
                <FormGroup tag='fieldset'>
                    <legend>Sauce</legend>
                    <FormGroup check>
                        <label check>
                            <input type='radio' name='sauce' value='Red' onChange={onInputChange} />
                            Red
                        </label>
                    </FormGroup>
                    <FormGroup check>
                        <label check>
                            <input type='radio' name='sauce' value='Green' onChange={onInputChange} />
                            Green
                        </label>
                    </FormGroup>
                    <FormGroup check>
                        <label check>
                            <input type='radio' name='sauce' value='Chipotle Mayo' onChange={onInputChange} />
                            Chipotle Mayo
                        </label>
                    </FormGroup>
                    <FormGroup check>
                        <label check>
                            <input type='radio' name='sauce' value='None' onChange={onInputChange} />
                            None
                        </label>
                    </FormGroup>
                </FormGroup>
                <legend>Meats</legend>
                <FormGroup check>
                    <label check>
                        <input type='radio' name='meat' value='beef' onChange={onInputChange} />
                            Beef
                        </label>
                </FormGroup>
                <FormGroup check>
                    <label check>
                        <input type='radio' name='meat' value='chicken' onChange={onInputChange} />
                            Chicken
                        </label>
                </FormGroup>
                <FormGroup check>
                    <label check>
                        <input type='radio' name='meat' value='fish' onChange={onInputChange} />
                            Fish
                        </label>
                </FormGroup>
                <FormGroup check>
                    <label check>
                        <input type='radio' name='meat' value='pork' onChange={onInputChange} />
                            Pork
                        </label>
                </FormGroup>
                <legend>Toppings</legend>
                <FormGroup check>
                    <label check>
                        <input type='checkbox' name='cilantro' checked={formData.cilantro} onChange={handleToppings} />
                        Cilantro
                    </label>
                </FormGroup>
                <FormGroup check>
                    <label check>
                        <input type='checkbox' name='whiteOnion' checked={formData.whiteOnion} onChange={handleToppings} />
                        White Onion
                    </label>
                </FormGroup>
                <FormGroup check>
                    <label check>
                        <input type='checkbox' name='lime' checked={formData.lime} onChange={handleToppings} />
                        Lime
                    </label>
                </FormGroup>
                <FormGroup check>
                    <label check>
                        <input type='checkbox' name='avacado' checked={formData.avacado} onChange={handleToppings} />
                        Avacado
                    </label>
                </FormGroup>
                <FormGroup>
                    <legend>Special Instructions</legend>
                    <input type='textarea' name='special' value={formData.special} onChange={onInputChange} />
                </FormGroup>
                <Button>Add to Order</Button>
            </Form>
        </>
    )
};

export default OrderForm;