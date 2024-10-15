import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import MyPagination from "@/components/myUi/MyPagination";
import PageHeader from "@/components/shared/PageHeader";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { CloudUpload, Edit, Eye, Pause, Play } from "lucide-react";
import { formatToTargetDate } from "@/globalUtils/common";
import { Link } from "react-router-dom";
import { useGetAllKidsAccountQuery } from "@/redux/api/kids-account.api";
import { TKids } from "../kidsProfile/kids.type";

const activationPageTabItems = [
  {
    lebel: "All",
    value: "all",
  },
  {
    lebel: "New",
    value: "new",
  },
  {
    lebel: "Uploaded",
    value: "Uploaded",
  },
  {
    lebel: "Not Uploaded",
    value: "Not Uploaded",
  },
];

const KidsVoices = () => {
  const [activeTab, setActiveTab] = useState("all");

  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleVoicePlay = (voiceUrl: string) => {
    if (audioRef.current) {
      audioRef.current.pause(); // Stop the currently playing audio
    }

    if (currentlyPlaying === voiceUrl) {
      // If the same voice is playing, stop it
      setCurrentlyPlaying(null);
      return;
    }

    const audio = new Audio(voiceUrl);
    audioRef.current = audio; // Set the current audio instance
    audio.play();
    setCurrentlyPlaying(voiceUrl); // Mark this voice as currently playing

    // Event listener to reset state when audio ends
    audio.onended = () => {
      setCurrentlyPlaying(null);
    };
  };

  const { data, isLoading } = useGetAllKidsAccountQuery({});
  if (isLoading) {
    return <p>Loading..</p>;
  }

  const handleActiveTabChange = (tabItem: string) => {
    setActiveTab(tabItem);
  };

  return (
    <div className="space-y-6">
      <PageHeader />
      <div className="p-6 border rounded-[16px] grid gap-4">
        <div className="px-6 py-4 flex justify-between items-center gap-4 ">
          <div className="w-[489px] h-6 justify-start items-center gap-6 inline-flex">
            {activationPageTabItems.map((tabItem, index) => (
              <Button
                key={index}
                variant="link"
                onClick={() => handleActiveTabChange(tabItem.value)}
                className={cn(
                  "text-center text-gray-600 text-lg font-semibold p-0 h-fit hover:no-underline",
                  {
                    "text-[#007bff]": tabItem.value === activeTab,
                  }
                )}
              >
                {tabItem.lebel}
              </Button>
            ))}
          </div>

          <div className="flex gap-4">
            <Input placeholder="Search..." />
            <Button>Filter</Button>
          </div>
        </div>
        <div>
          <Table className="border-b">
            <TableHeader className="bg-secondary">
              <TableRow>
                <TableHead className="w-[80px] flex items-center gap-4">
                  #
                </TableHead>
                <TableHead className="text-primary">Child Name</TableHead>
                <TableHead className="text-primary font-medium">Age</TableHead>
                <TableHead className="text-primary font-medium">
                  Gender
                </TableHead>
                <TableHead className="text-primary font-medium">
                  Parent Account
                </TableHead>
                <TableHead className="text-primary font-medium">
                  Creation date
                </TableHead>
                <TableHead className="text-primary font-medium">
                  Voice File
                </TableHead>
                <TableHead className="text-primary font-medium text-right">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.data.map((kidsAccount: TKids, index: number) => (
                <TableRow key={kidsAccount._id}>
                  <TableCell className="flex items-center gap-4">
                    {index + 1}
                  </TableCell>
                  <TableCell>{kidsAccount.kidsName}</TableCell>
                  <TableCell>{kidsAccount.age}</TableCell>
                  <TableCell>{kidsAccount.gender}</TableCell>
                  <TableCell>Parent Account</TableCell>
                  <TableCell>
                    {formatToTargetDate(kidsAccount.createdAt)}
                  </TableCell>
                  <TableCell>
                    <TableCell>
                      {kidsAccount.voice ? (
                        <Button
                          onClick={() =>
                            handleVoicePlay(kidsAccount.voice || "")
                          }
                          className={cn("p-0 size-10", {
                            "bg-primary text-white":
                              currentlyPlaying === kidsAccount.voice,
                          })}
                        >
                          {currentlyPlaying === kidsAccount.voice ? (
                            <Pause />
                          ) : (
                            <Play />
                          )}
                        </Button>
                      ) : (
                        "No Voice"
                      )}
                    </TableCell>
                  </TableCell>

                  <TableCell className="h-full">
                    <div className="justify-end items-center gap-6 flex ">
                      <Button
                        className="p-0 h-fit text-primary"
                        variant="ghost"
                      >
                        <Eye />
                      </Button>
                      <Button
                        className="p-0 h-fit text-red-600 hover:text-red-600"
                        variant="ghost"
                      >
                        <Link to={`/voice/eidt-kids-voice/${kidsAccount._id}`}>
                          <Edit />
                        </Link>
                      </Button>
                      <Button
                        className="p-0 h-fit text-[#374151] hover:text-[#374151]"
                        variant="ghost"
                        disabled={!!kidsAccount?.voice}
                      >
                        <Link
                          to={`/voice/upload-kids-voice/${kidsAccount._id}`}
                        >
                          <CloudUpload />
                        </Link>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="px-6 py-4 flex justify-between items-center gap-4 ">
          <h3 className="text-[#475467] text-sm font-normal font-roboto leading-tight tracking-tight flex-grow">
            Showing 1 to 3 of 3 entries
          </h3>
          <MyPagination />
        </div>
      </div>
    </div>
  );
};

export default KidsVoices;
