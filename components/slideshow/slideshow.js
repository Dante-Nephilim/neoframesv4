
import Ione from './1.jpg'
import Itwo from './2.jpg'
import Ithree from './3.jpg'
import Image from 'next/image'
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class Slideshow extends Component {
	render() {
		return (
			<div>
                 <h1 className="text-3xl mb-2 font-semibold leading-normal">WorkSpace</h1>
			<Carousel>
           
				<div>
					<Image src={Ione} height={400} width={600} alt="image1"/>
					

				</div>
				<div>
					<Image src={Itwo} height={400} width={600} alt="image2" />
					

				</div>
				<div>
					<Image src={Ithree} height={400} width={600} alt="image3"/>
					

				</div>
				
			</Carousel>
			</div>
		);
	}
};
