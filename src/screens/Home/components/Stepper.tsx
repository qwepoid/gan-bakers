const Stepper = ({
  qty,
  onIncrement,
  onDecrement,
}: {
  qty: number;
  onIncrement: any;
  onDecrement: any;
}) => {
  return (
    <div className="flex gap-2">
      <button className="border px-2" onClick={onDecrement}>
        -
      </button>
      <span>{qty}</span>
      <button className="border px-2" onClick={onIncrement}>
        +
      </button>
    </div>
  );
};

export default Stepper;
