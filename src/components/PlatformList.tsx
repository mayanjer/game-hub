import { usePlatforms } from "./hooks/usePlatforms";

export default function PlatformList() {
    const {platforms} = usePlatforms()
    return (
        <select className="mb-1 w-70 rounded-lg border">
            <option>Platforms</option>
            {platforms.map((platform) => <option>{ platform.name }</option>)}
      </select>
    );
}