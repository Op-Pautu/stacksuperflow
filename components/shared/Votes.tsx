"use client";

import {
  downvoteQuestion,
  upvoteQuestion,
} from "@/lib/actions/question.action";
import { formatAndDivideNumber } from "@/lib/utils";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { type } from "os";
import React from "react";

interface VotesProps {
  type: string;
  itemId: string;
  userId: string;
  upvotes: number;
  hasUpvoted: boolean;
  downvotes: number;
  hasDownvoted: boolean;
  hasSaved?: boolean;
}

const Votes = ({
  type,
  itemId,
  userId,
  upvotes,
  hasUpvoted,
  downvotes,
  hasDownvoted,
  hasSaved,
}: VotesProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleSave = () => {};

  const handleVote = async (action: string) => {
    if (!userId) {
      return;
    }

    if (action === "upvote") {
      if (type === "Question") {
        await upvoteQuestion({
          questionId: JSON.parse(itemId),
          userId: JSON.parse(userId),
          hasUpvoted,
          hasDownvoted,
          path: pathname,
        });
      } else if (type === "Answer") {
        // await upvoteAnswer({
        //   questionId: JSON.parse(itemId),
        //   userId: JSON.parse(userId),
        //   hasUpvoted,
        //   hasDownvoted,
        //   path: pathname,
        // });
      }
      // todo: show a toast
      return;
    }

    if (action === "downvote") {
      if (type === "Question") {
        await downvoteQuestion({
          questionId: JSON.parse(itemId),
          userId: JSON.parse(userId),
          hasUpvoted,
          hasDownvoted,
          path: pathname,
        });
      } else if (type === "Answer") {
        // await downvoteAnswer({
        //   questionId: JSON.parse(itemId),
        //   userId: JSON.parse(userId),
        //   hasUpvoted,
        //   hasDownvoted,
        //   path: pathname,
        // });
      }
      // todo: show a toast
    }
  };

  return (
    <div className="flex gap-5">
      <div className="flex-center gap-2.5">
        <div className="flex-center gap-1.5">
          <Image
            src={
              hasUpvoted
                ? "/assets/icons/upvoted.svg"
                : "/assets/icons/upvote.svg"
            }
            alt="upvote icon"
            width={18}
            height={18}
            className="cursor-pointer"
            onClick={() => handleVote("upvote")}
          />

          <div className="flex-center background-light700_dark400 min-h-[18px] rounded-sm p-1">
            <p className="subtle-medium text-dark400_light900">
              {formatAndDivideNumber(upvotes)}
            </p>
          </div>
        </div>
        <div className="flex-center gap-1.5">
          <Image
            src={
              hasDownvoted
                ? "/assets/icons/downvoted.svg"
                : "/assets/icons/downvote.svg"
            }
            alt="downvote icon"
            width={18}
            height={18}
            className="cursor-pointer"
            onClick={() => handleVote("downvote")}
          />

          <div className="flex-center background-light700_dark400 min-h-[18px] rounded-sm p-1">
            <p className="subtle-medium text-dark400_light900">
              {formatAndDivideNumber(downvotes)}
            </p>
          </div>
        </div>
      </div>
      <Image
        src={
          hasSaved
            ? "/assets/icons/star-filled.svg"
            : "/assets/icons/star-red.svg"
        }
        alt="star icon"
        width={18}
        height={18}
        className="cursor-pointer"
        onClick={handleSave}
      />
    </div>
  );
};

export default Votes;
