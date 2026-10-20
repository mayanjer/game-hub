import { usePlatforms } from "./hooks/usePlatforms";
interface Props {
  platform: (value:string) => void;
}
export default function PlatformList({ platform }: Props) {
  const { platforms } = usePlatforms();
  return (
    <select
      onChange={(e) => platform(e.target.value)}
      className="mb-1 w-70 rounded-lg border"
    >
      <option>Platforms</option>
      {platforms.map((platform) => (
        <option value={platform.name}>{platform.name}</option>
      ))}
    </select>
  );
}
