import { SearchParamsProps } from "@/types";
import React from "react";

interface QuestionsTabProps extends SearchParamsProps {
  userId: string;
  clerkId?: string | null;
}

const AnswersTab = async ({
  searchParams,
  userId,
  clerkId,
}: QuestionsTabProps) => {
  return <div>AnswersTab</div>;
};

export default AnswersTab;
