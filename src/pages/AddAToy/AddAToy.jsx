import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../Providers/AuthProvider';

const AddAToy = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (data) => {
        data.sellerName = user.displayName;
        data.sellerEmail = user.email;
        console.log(data)
        setIsSubmitting(true);
        // Send the form data to the backend API
        try {
            const response = await fetch('http://localhost:3000/addToys', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            // Handle the response from the backend
            if (response.ok) {
                // Toy added successfully
                console.log('Toy added successfully');
            } else {
                // Error adding toy
                console.log('Error adding toy');
            }
        } catch (error) {
            console.log('Error:', error);
        }
        setIsSubmitting(false);
    };

    console.log(user?.displayName);

    return (
        <div>
            <h1>Add A Toy</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>

                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        {...register('name', { required: true })}
                        placeholder="Enter toy name"
                    />
                    {errors.name && <Form.Text className="text-danger">This field is required</Form.Text>}
                </Form.Group>

                <Form.Group controlId="sellerName">
                    <Form.Label>Seller Name</Form.Label>
                    <Form.Control
                        type="text"
                        defaultValue={user?.displayName} // Replace with the actual seller name
                        disabled
                    />
                    {/* <input
                        type="hidden"
                        {...register('sellerName', { value: user?.displayName })}
                    /> */}
                </Form.Group>

                <Form.Group controlId="sellerEmail">
                    <Form.Label>Seller Email</Form.Label>
                    <Form.Control
                        type="email"
                        defaultValue={user?.email} // Replace with the actual seller email
                        disabled
                    />
                    {/* <input
                        type="hidden"
                        {...register('sellerEmail', { value: user?.email })}
                    /> */}
                </Form.Group>

                <Form.Group controlId="pictureUrl">
                    <Form.Label>Picture URL of the toy</Form.Label>
                    <Form.Control
                        type="url"
                        {...register('pictureUrl', { required: true })}
                        placeholder="Enter picture URL"
                    />
                    {errors.pictureUrl && <Form.Text className="text-danger">This field is required</Form.Text>}
                </Form.Group>

                <Form.Group controlId="subCategory">
                    <Form.Label>Sub-category</Form.Label>
                    <Form.Control as="select" {...register('subCategory', { required: true })}>
                        <option value="">Select sub-category</option>
                        <option value="Math Toys">Math Toys</option>
                        <option value="Language Toys">Language Toys</option>
                        <option value="Science Toys">Science Toys</option>
                    </Form.Control>
                    {errors.subCategory && <Form.Text className="text-danger">This field is required</Form.Text>}
                </Form.Group>

                <Form.Group controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        {...register('price', { required: true })}
                        placeholder="Enter toy price"
                    />
                    {errors.price && <Form.Text className="text-danger">This field is required</Form.Text>}
                </Form.Group>

                <Form.Group controlId="rating">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control
                        type="number"
                        {...register('rating', { required: true })}
                        placeholder="Enter toy rating"
                    />
                    {errors.rating && <Form.Text className="text-danger">This field is required</Form.Text>}
                </Form.Group>

                <Form.Group controlId="quantity">
                    <Form.Label>Available Quantity</Form.Label>
                    <Form.Control
                        type="number"
                        {...register('quantity', { required: true })}
                        placeholder="Enter available quantity"
                    />
                    {errors.quantity && <Form.Text className="text-danger">This field is required</Form.Text>}
                </Form.Group>

                <Form.Group controlId="description">
                    <Form.Label>Detail Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        {...register('description', { required: true })}
                        placeholder="Enter toy description"
                    />
                    {errors.description && <Form.Text className="text-danger">This field is required</Form.Text>}
                </Form.Group>

                <Button variant="primary" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Add Toy'}
                </Button>
            </Form>
        </div>
    );
};

export default AddAToy;