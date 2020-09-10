import React, {Component} from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Auxiliar from '../Auxiliar/Auxiliar';

const withErrorHandler = (WrappedComponents, axios) => {
    return class extends Component {
        state= {
            error: null
        }

        componentWillMount () {
            this.requestInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            })
            this.responseInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error})
            })
        }

        componentWillUnmount () {
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
            //not  working now, but is an example to how remove this interceptors when they are no longer needed
            //
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        }

        render () {
            return (
                <Auxiliar>
                    <Modal 
                        display={this.state.error}
                        closeModal={this.errorConfirmedHandler} >
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponents {...this.props}/>
                </Auxiliar>
                
            )
        }
    }
}

export default withErrorHandler;