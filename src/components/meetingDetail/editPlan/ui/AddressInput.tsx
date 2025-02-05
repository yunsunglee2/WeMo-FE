import useKakaoLoader from '@/hooks/useKakaoLoader';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import AddressSearchModal from '../AddressSearchModal';
import { Coordinate } from '@/types/mapType';
import MarkerIcon from '@/assets/icons/location_marker.svg';
interface AddressInputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
  label: string;
  value: string;
  isOpenMap: boolean;
  openMap: () => void;
  closeMap: () => void;
  coordinate: Coordinate;
  handleClickMap: ({ lat, lng }: Coordinate) => Promise<void>;
}
export default function AddressInput<T extends FieldValues>({
  register,
  name,
  label,
  value,
  isOpenMap,
  openMap,
  closeMap,
  handleClickMap,
  coordinate,
}: AddressInputProps<T>) {
  useKakaoLoader();
  return (
    <>
      <div className="form-label relative">
        {label}
        <button
          type="button"
          onClick={openMap}
          className="form-input flex items-center gap-2"
        >
          <MarkerIcon />
          <input
            value={value}
            {...register(name, { required: '장소롤 선택해 주세요' })}
            readOnly
            className="w-full cursor-pointer outline-none"
            placeholder="장소를 선택해 주세요"
          />
        </button>
      </div>
      <AddressSearchModal
        address={value}
        closeMap={closeMap}
        isOpenMap={isOpenMap}
        coordinate={coordinate}
        handleClickMap={handleClickMap}
      />
    </>
  );
}
