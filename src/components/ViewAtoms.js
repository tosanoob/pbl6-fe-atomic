import React, { useState } from 'react';
import Button from './atoms/Button';
import InputField from './atoms/InputField';
import { Heading, Paragraph } from './atoms/Typography';
import Icon from './atoms/Icon';
import Image from './atoms/Image';
import RestaurantCard from './atoms/RestaurantCard';
import Modal from './atoms/Modal';
import ToastNotification from './atoms/ToastNotification';
import Spinner from './atoms/Spinner';
import Divider from './atoms/Divider';

const ViewAtoms = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const restaurant = {
    name: "Nhà hàng Mì Bò Hầm",
    description: "Mì bò hầm thơm ngon, đậm đà hương vị.",
    image: "https://example.com/image.jpg", // Thay bằng URL hình ảnh thực tế
  };

  return (
    <div style={{ padding: '20px' }}>
      <Heading level={1}>Showcase of Atoms</Heading>

      <Divider />

      <Heading level={2}>Buttons</Heading>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Divider />

      <Heading level={2}>Input Fields</Heading>
      <InputField label="Input Text" />
      <InputField label="Password" type="password" />
      <Divider />

      <Heading level={2}>Typography</Heading>
      <Paragraph>This is a sample paragraph showcasing typography.</Paragraph>
      <Divider />

      <Heading level={2}>Icons</Heading>
      <Icon name="search" /> {/* Thay thế bằng tên biểu tượng thực tế */}
      <Divider />

      <Heading level={2}>Images</Heading>
      <Image src={restaurant.image} alt={restaurant.name} />
      <Divider />

      <Heading level={2}>Restaurant Card</Heading>
      <RestaurantCard restaurant={restaurant} />
      <Divider />

      <Heading level={2}>Modals</Heading>
      <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <Heading level={3}>This is a Modal</Heading>
        <Paragraph>Content of the modal goes here.</Paragraph>
      </Modal>
      <Divider />

      <Heading level={2}>Toast Notification</Heading>
      <Button onClick={() => setShowToast(true)}>Show Toast</Button>
      {showToast && (
        <ToastNotification 
          message="This is a toast notification!"
          onClose={() => setShowToast(false)}
        />
      )}
      <Divider />

      <Heading level={2}>Loading Indicator</Heading>
      <Spinner />
      <Divider />

      <Heading level={2}>Divider</Heading>
      <Divider />
      <Paragraph>This is a paragraph below the divider.</Paragraph>
    </div>
  );
};

export default ViewAtoms;
