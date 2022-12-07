import React from "react";
const LowerScoreBoard = (props, ref) => {
  const { expectedScore } = props;
  const { setIsSubmitted } = props;
  // B. 상태 변경
  const handleChoice = () => {
    if (ref.current.choice !== -1) return;
    ref.current.choice = expectedScore.choice;
    setIsSubmitted(true);
  };
  const handleFourOfAKind = () => {
    if (ref.current.fourOfAKind !== -1) return;
    ref.current.fourOfAKind = expectedScore.fourOfAKind;
    setIsSubmitted(true);
  };
  const handleFullHouse = () => {
    if (ref.current.fullHouse !== -1) return;
    ref.current.fullHouse = expectedScore.fullHouse;
    setIsSubmitted(true);
  };
  const handleSmallStraight = () => {
    if (ref.current.smallStraight !== -1) return;
    ref.current.smallStraight = expectedScore.smallStraight;
    setIsSubmitted(true);
  };
  const handleLargeStraight = () => {
    if (ref.current.largeStraight !== -1) return;
    ref.current.largeStraight = expectedScore.largeStraight;
    setIsSubmitted(true);
  };
  const handleYacht = () => {
    if (ref.current.yacht !== -1) return;
    ref.current.yacht = expectedScore.yacht;
    setIsSubmitted(true);
  };
  return (
    <div>
      <h3 className="text-lg font-bold text-secondary">[Section 2]</h3>
      <table className="table table-fixed table-compact w-auto">
        <thead>
          <tr className="dark:[&>*]:border-[#e5e7eb]">
            <th className="border w-36 md:w-40 py-1 sm:py-2"></th>
            <th className="border-y py-1 sm:py-2">Earned</th>
            <th className="border py-1 sm:py-2">Expected</th>
          </tr>
        </thead>
        <tbody>
          <tr
            onClick={handleChoice}
            className="score hover dark:[&>*]:border-[#e5e7eb]"
          >
            {/* A. 점수 선택 */}
            {/* 클릭하면 현재 주사위에 대한 예상 점수가 선택한 점수로 바뀌며 다음 라운드로 진행하게 된다. */}
            <th
              className="border-x border-b tooltip tooltip-top md:tooltip-left text-left w-36 md:w-40 py-1 sm:py-2"
              data-tip="주사위 5개의 합"
            >
              Choice
            </th>
            {/* A. 점수 출력 */}
            {/* `earned`, 선택한 점수 */}
            <td className="earned py-1 sm:py-2">
              {ref.current.choice !== -1 ? ref.current.choice : ""}
            </td>
            {/* `expected`, 현재 주사위에 대한 예상 점수 */}
            <td className="expected border-x py-1 sm:py-2">
              {expectedScore.choice}
            </td>
          </tr>
          <tr
            onClick={handleFourOfAKind}
            className="score hover dark:[&>*]:border-[#e5e7eb]"
          >
            <th
              className="border-x w-36 md:w-40 tooltip tooltip-top md:tooltip-left text-left py-1 sm:py-2 "
              data-tip="같은 눈을 가진 주사위가 4개 이상	| (주사위의 눈) * 4"
            >
              4 of a Kind
            </th>
            <td className="earned py-1 sm:py-2">
              {ref.current.fourOfAKind !== -1 ? ref.current.fourOfAKind : ""}
            </td>
            <td className="expected border-x py-1 sm:py-2">
              {expectedScore.fourOfAKind}
            </td>
          </tr>
          <tr
            onClick={handleFullHouse}
            className="score hover dark:[&>*]:border-[#e5e7eb]"
          >
            <th
              className="border-x w-36 md:w-40 tooltip tooltip-top md:tooltip-left text-left whitespace-pre-line py-1 sm:py-2"
              data-html="true"
              data-tip="같은 눈을 가진 주사위가 3개 그리고 또 다른 같은 눈을 가진 주사위가 2개. 같은 눈을 가진 주사위가 5개인 경우(Yacht)에도 해당 | 주사위 5개의 합"
            >
              Full House
            </th>
            <td className="earned py-1 sm:py-2">
              {ref.current.fullHouse !== -1 ? ref.current.fullHouse : ""}
            </td>
            <td className="expected border-x py-1 sm:py-2">
              {expectedScore.fullHouse}
            </td>
          </tr>
          <tr
            onClick={handleSmallStraight}
            className="score hover dark:[&>*]:border-[#e5e7eb]"
          >
            <th
              className="border-x w-36 md:w-40 tooltip tooltip-top md:tooltip-left text-left py-1 sm:py-2"
              data-tip="주사위 4개 이상이 연속된 숫자 | 15점"
            >
              Small Straight
            </th>
            <td className="earned py-1 sm:py-2">
              {ref.current.smallStraight !== -1
                ? ref.current.smallStraight
                : ""}
            </td>
            <td className="expected border-x py-1 sm:py-2">
              {expectedScore.smallStraight}
            </td>
          </tr>
          <tr
            onClick={handleLargeStraight}
            className="score hover dark:[&>*]:border-[#e5e7eb]"
          >
            <th
              className="border-x dark:border-[#e5e7eb] w-36 md:w-40 tooltip tooltip-top md:tooltip-left text-left py-1 sm:py-2"
              data-tip="주사위 5개가 연속된 숫자 | 30점"
            >
              Large Straight
            </th>
            <td className="earned py-1 sm:py-2">
              {ref.current.largeStraight !== -1
                ? ref.current.largeStraight
                : ""}
            </td>
            <td className="expected border-x py-1 sm:py-2">
              {expectedScore.largeStraight}
            </td>
          </tr>
          <tr
            onClick={handleYacht}
            className="score hover dark:[&>*]:border-[#e5e7eb]"
          >
            <th
              className="border-x border-b w-36 md:w-40 tooltip tooltip-top md:tooltip-left text-left py-1 sm:py-2"
              data-tip="같은 눈을 가진 주사위가 5개 | 50점"
            >
              Yacht
            </th>
            <td className="earned border-b py-1 sm:py-2">
              {ref.current.yacht !== -1 ? ref.current.yacht : ""}
            </td>
            <td className="expected border-x border-b py-1 sm:py-2">
              {expectedScore.yacht}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
const ForwardedLowerScoreBoard = React.forwardRef(LowerScoreBoard);
export default ForwardedLowerScoreBoard;
