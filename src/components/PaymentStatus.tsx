"use client";

interface PaymentStatusProps {
  orderEmail: string
  orderId: string
  isPaid: boolean

}

const PaymentStatus = ({ orderEmail, orderId, isPaid}: PaymentStatusProps) => {


  return (
    <div className="mt-16 grid grid-cols-2 gap-x-4 text-sm text-gray-600">
      <div>
        <p className="font-medium text-gray-900">
          Shipping To
        </p>
        <p>{orderEmail}</p>
      </div>
    </div>
  );
};

export default PaymentStatus;
