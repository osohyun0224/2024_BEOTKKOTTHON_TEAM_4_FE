import { Images } from '@globalStyles';
import Image from 'next/image';

export const EtcDiseaseList = [
  {
    id: 1,
    iconsImage: Images.ico_vac1,
    vacName: '결핵',
    vacSub: 'BCG, 경피접종',
    vacDes: '결핵은 결핵균(Mycobacterium tuberculosis)에 의한 공기매개 감염질환으로 폐를 침범할 뿐만 아니라 흉막, 림프절, 복부, 골 및 관절, 중추신경계, 비뇨생식기, 기도, 심낭 등 신체의 여러 부분을 침범하는 질환입니다.',
    qaList: [
      {
        id: 1,
        ques:'결핵은 어떻게 전파되나요?',
        ans:'호흡기 결핵 환자의 기침, 재채기 등을 통해 나오는 미세한 비말형태의 분비물을 통하여 다른 사람에게 전파됩니다.'
      },
      {
        id: 2,
        ques:'결핵의 증상은 무엇인가요?',
        ans:'열, 식욕부진, 체중감소, 야간발한 등의 전신증상이 있을 수 있습니다. 폐결핵의 경우 지속되는 기침, 가래, 객혈(가래에 피가 섞임) 등의 호흡기 증상이 있고 영아에서는 마른기침, 경한 호흡곤란이 가장 흔한 증상으로 나타납니다. 폐외결핵의 경우 발열, 식욕부진, 체중감소, 쇠약감, 오한 등의 전신증상과 감염부위의 통증 등의 국소증상이 나타날 수 있습니다'
      },
      {
        id: 3,
        ques:'결핵의 치료는 어떻게 하나요?',
        ans:'항결핵제를 복용하는 내과적 치료를 실시하며 수술과 같은 외과적 치료를 병행할 수 있습니다. 결핵이 발병한 사람은 의사의 지시에 따라 치료효과와 부작용에 대한 검사를 정기적으로 받고, 처방된 약을 꾸준히 복용해야 내성균 발현을 막고 결핵을 완치할 수 있습니다.'
      },
      {
        id: 4,
        ques:'결핵은 어떻게 예방하나요?',
        ans:'BCG 예방접종을 통해 결핵을 예방할 수 있습니다.'
      }
    ],
    age: [0, 0, 0, 0, 0, 0], 
    sit: [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1],
  },
  {
    id: 22,
    iconsImage: Images.ico_vac9,
    vacName: '일본뇌염(약독화)',
    vacSub: 'LJEV, 키메라 바이러스 생백신',
    vacDes: '일본뇌염은 Flavivirus 속 일본뇌염 바이러스(Japanese encephalitis virus)에 의한 인수공통감염병으로 작은빨간집모기(Culex tritaeniorhynchus)에 의해 감염되어 뇌염을 일으키는 질환입니다. 일단 일본뇌염에 걸리면 특별한 치료방법이 없으므로 백신 접종을 통한 예방이 최선입니다.',
    qaList: [
      {
        id: 1,
        ques:'일본뇌염은 어떻게 전파되나요?',
        ans:'일본뇌염은 Flavivirus 속 일본뇌염 바이러스(Japanese encephalitis virus)에 의한 인수공통감염병으로 작은빨간집모기(Culex tritaeniorhynchus)에 의해 감염되어 뇌염을 일으키는 질환입니다. 일단 일본뇌염에 걸리면 특별한 치료방법이 없으므로 백신 접종을 통한 예방이 최선입니다.'
      },
      {
        id: 2,
        ques:'일본뇌염의 증상은 무엇인가요?',
        ans:'일본뇌염 바이러스를 가진 "작은빨간집모기"에 물리면 감염됩니다.'
      },
      {
        id: 3,
        ques:'일본뇌염의 치료는 어떻게 하나요?',
        ans:'일본뇌염 바이러스의 인체 감염은 대부분 무증상이며, 감염자의 약 250명 중 1명에서 임상증상을 나타내며, 열을 동반하는 가벼운 증상이나 바이러스성 수막염으로 이행되기도 하고 드물게 뇌염으로까지 진행될 수 있습니다. 뇌염으로 진행된 경우 약 30%의 치명률을 보입니다.'
      },
      {
        id: 4,
        ques:'일본뇌염은 어떻게 예방하나요?',
        ans:'일본뇌염에 대한 특이적인 치료법은 없고 호흡장애, 순환장애, 세균감염 등에 대해서는 보존적인 치료가 필요합니다. ▶ 일본뇌염은 어떻게 예방하나요? 일본뇌염 예방접종을 통해 일본뇌염을 예방할 수 있습니다.'
      }
    ],
    age: [ 0, 0, 0, 0, 0, 0],
    sit: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1], 
  },
  {
    id: 15,
    iconsImage: Images.ico_vac15,
    vacName: '사람유두종바이러스',
    vacSub: 'HPV9',
    vacDes: '사람유두종바이러스는 생식기 감염을 일으키는 가장 흔한 원인 병원체 중 하나로, 고위험군 HPV 감염과 관련 있는 암으로는 자궁경부암, 질암, 외음부암, 음경암, 항문암, 구강암, 구인두암 등이 있고 저위험군 HPV 감염과 관련 있는 질환으로는 생식기 사마귀, 재발성 호흡기 유두종 등이 있습니다.',
    qaList: [
      {
        id: 1,
        ques:'사람유두종바이러스은 어떻게 전파되나요?',
        ans:'사람유두종바이러스는 주로 감염된 사람과의 성접촉을 통해 전파됩니다.'
      },
      {
        id: 2,
        ques:'사람유두종바이러스의 증상은 무엇인가요?',
        ans:'사람유두종바이러스 감염은 대부분 증상이 없고, 여성 생식기에 약 6~12개월간 유지되었다가 자연적으로 소멸되지만, 지속적인 HPV 감염은 자궁경부암, 자궁경부 전암병변, 질암과 외음부암, 항문 및 생식기 사마귀와 호흡기에 생기는 유두종 등의 다양한 임상질환을 일으킵니다.'
      },
      {
        id: 3,
        ques:'사람유두종바이러스의 치료는 어떻게 하나요?',
        ans:'사람유두종바이러스 감염 자체를 치료할 수 있는 방법은 없으며 사람유두종바이러스로 인한 질병의 종류에 따라 치료법이 달라집니다.'
      },
      {
        id: 4,
        ques:'사람유두종바이러스은 어떻게 예방하나요?',
        ans:'사람유두종바이러스 감염증 예방접종을 통해 백신에 포함된 유형에 의한 사람유두종바이러스 감염을 예방할 수 있습니다.'
      },
      {
        id: 5,
        ques:'사람유두종바이러스 감염증 예방접종 후 이상반응에는 무엇이 있나요?',
        ans:'사람유두종바이러스 감염증 예방접종 후 접종부위 통증, 부어오름, 발적, 두드러기 등의 국소반응 또는 발열, 메스꺼움, 근육통 등의 전신반응이 나타날 수 있지만 대부분 가볍고 수일 내에 회복됩니다.'
      }
    ],
    age: [ 1, 0, 0, 0, 0, 0],
    sit: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  },
  {
    id: 16,
    iconsImage: Images.ico_vac16,
    vacName: '수막구균',
    vacSub: 'MCV4',
    vacDes: '수막구균 감염증은 수막구균(Neisseria meningitidis)에 의한 급성 감염병으로, 주로 수막염과 패혈증을 일으키는 중증 질환입니다.',
    qaList: [
      {
        id: 1,
        ques:'수막구균 감염증은 어떻게 전파되나요?',
        ans:'환자나 건강한 보균자의 코나 입의 점액에 있던 수막구균이 작은 수포 또는 직접 접촉을 통해 전파됩니다.'
      },
      {
        id: 2,
        ques:'수막구균 감염증의 증상은 무엇인가요?',
        ans:'수막구균은 수막염과 패혈증, 기타 감염을 일으킵니다. 수막구균에 의한 수막염은 두통, 발열, 경부 경직, 오심, 구토 등이 급격히 시작하며, 더 진행되면 의식이 혼탁해집니다. 수막구균 패혈증은 수막염의 증상이 없으면서 혈액에서 수막구균이 발견되는 경우로 피부에 출혈소견이 동반되기도 하며, 발병 24시간 이내에 사망하기도 합니다. 기타 감염으로 폐렴, 관절염, 후두개염, 중이염, 심낭염 등이 있으나 수막구균 감염증의 특징적인 증상 없이 해당 부위 검체에서 수막구균이 확인된 경우입니다.'
      },
      {
        id: 3,
        ques:'수막구균 감염증의 치료는 어떻게 하나요?',
        ans:'빠르게 진행하는 세균 감염이므로 항생제 치료가 중요합니다.'
      },
      {
        id: 4,
        ques:'수막구균 감염증은 어떻게 예방하나요?',
        ans:'수막구균 예방접종을 통해 예방이 가능합니다. 수막구균 예방접종은 필수예방접종 대상 감염병에 포함되지 않으며, 수막구균 감염 위험이 높은 대상자에게 접종이 권고되므로 의사와 상의한 후 접종여부를 결정하도록 합니다.'
      },
      {
        id: 5,
        ques:'수막구균 감염증 예방접종 후 이상반응에는 무엇이 있나요?',
        ans:'수막구균 예방접종 후에 생길 수 있는 국소 이상반응에는 접종부위 발적, 부종, 동통이 있으며, 전신 이상반응으로 발열, 두통, 무기력 등이 나타날 수 있습니다.'
      }
    ],
    age: [0,  0, 0, 0, 0, 0, 0],
    sit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
  },
  
  {
    id: 17,
    iconsImage: Images.ico_vac17,
    vacName: '대상포진',
    vacSub: 'HZV',
    vacDes: '대상포진은 피부분절을 따라서 수포성 발진이 발생하는 질환으로 수두-대상포진바이러스(Varicella-zoster virus, VZV)의 일차 감염 후 감각신경절에 잠복해 있던 바이러스가 재활성화되어 발생하는 질환입니다.',
    qaList: [
      {
        id: 1,
        ques:'대상포진은 어떻게 전파되나요?',
        ans:'대상포진의 수포에는 VZV가 있기 때문에 VZV에 대한 면역력이 없는 사람이 대상포진 환자와 접촉하는 경우 VZV가 재활성되면서 수두를 일으킬 수 있습니다. 국소적인 대상포진의 경우 수포가 생기기 시작할 때부터 모든 병소에 가피가 생길 때까지 전파가능성이 있으며 대개 병소와 직접 접촉에 의해 전파됩니다.'
      },
      {
        id: 2,
        ques:'대상포진의 증상은 무엇인가요?',
        ans:'발진과 수포가 등신경뿌리 신경절이 분포하는 편측에 국한적으로 발생하며, 해당 부위 심한 통증과 지각 이상이 동반될 수 있으며, 특이하게 대상포진과 안면신경마비나 내이신경증상이 동반하는 람지-헌트 증후군(Ramsay-Hunt syndrome)이 나타날 수 있습니다. 대상포진의 합병증으로 가장 문제가 되는 것은 대상포진 후 신경통으로 연령이 많을수록 발생 빈도가 높습니다. 소아에게 대상포진은 흔하지 않으며 발생하는 경우에도 증상이 경미합니다.'
      },
      {
        id: 3,
        ques:'대상포진의 치료는 어떻게 하나요?',
        ans:'성인의 경우 항바이러스제를 투여하면 증상의 경감과 치료기간의 단축, 합병증 감소를 기대할 수 있습니다.'
      },
      {
        id: 4,
        ques:'대상포진은 어떻게 예방하나요?',
        ans:'대상포진 예방접종을 통해 예방이 가능하나 대상포진 예방접종은 필수예방접종 대상 감염병에 포함되지 않습니다.'
      },
      {
        id: 5,
        ques:'대상포진 예방접종 후 이상반응에는 무엇이 있나요?',
        ans:'대상포진 예방접종 후 이상반응에는 무엇이 있나요? 대상포진 예방접종 후 접종 부위 발적, 통증, 부종과 같은 국소반응이 가장 흔하게 나타납니다.'
      },
    ],
    age: [0,  0, 0, 0, 0, 0, 0],
    sit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
  },
  {
    id: 13,
    iconsImage: Images.ico_vac13,
    vacName: 'A형간염',
    vacSub: 'HepA, 성인용',
    vacDes: 'A형간염은 A형간염 바이러스(Hepatitis A virus, HAV)에 의하여 발생하는 간염으로 환경 및 위생개선과 적절한 예방조치로 예방이 가능합니다.',
    qaList: [
      {
        id: 1,
        ques:'A형간염은 어떻게 전파되나요?',
        ans:'A형간염은 A형간염 바이러스(Hepatitis A virus, HAV)에 의하여 발생하는 간염으로 환경 및 위생개선과 적절한 예방조치로 예방이 가능합니다.'
      },
      {
        id: 2,
        ques:'A형간염의 증상은 무엇인가요?',
        ans:'전형적인 증상은 고열, 권태감, 식욕부진, 메스꺼움, 복통, 암갈색 소변, 황달 등으로 갑자기 발생합니다. 증상의 발현은 연령과 관련이 있어 6세 미만의 소아에서는 증상이 경하며 황달이 생기는 경우는 드물지만, 6세 이상의 소아나 성인에서는 대부분 간염의 증상이 생기며, 이 중 70% 이상에서 황달이 동반됩니다. 이러한 증상은 대체로 2개월을 넘지 않으나 10~15%에서는 6개월 이상 증상이 지속되거나 재발할 수 있습니다. 하지만 만성화되는 경우는 없습니다.'
      },
      {
        id: 3,
        ques:'A형간염의 치료는 어떻게 하나요?',
        ans:'A형간염은 특별한 치료법이 없으며 대증요법으로 치료합니다.'
      },
      {
        id: 4,
        ques:'A형간염은 어떻게 예방하나요?',
        ans:'A형간염 예방접종을 통해 A형간염을 예방할 수 있습니다.'
      }
    ],
    age: [1, 1, 1, 1, 1, 1, 1],
    sit: [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  {
    id: 11,
    iconsImage: Images.ico_vac11,
    vacName: '장티푸스',
    vacSub: 'Ty21a, 경구용',
    vacDes: '장티푸스는 장티푸스균(Salmonella Typhi)의 파종감염에 의해 발생하는 급성 전신성 열성질환으로 상하수도 시설이 미비한 개발도상국에서 지속적으로 유행이 되는 질환입니다.',
    qaList: [
      {
        id: 1,
        ques:'장티푸스는 어떻게 전파되나요?',
        ans:'환자나 보균자의 소변이나 분변으로 오염된 식수나 음식을 섭취 시 감염이 되며 오염된 하천에서 자란 갑각류나 어패류, 배설물이 묻은 과일 등을 통해 감염됩니다.'
      },
      {
        id: 2,
        ques:'장티푸스의 증상은 무엇인가요?',
        ans:'3~60일(평균 8~14일) 정도의 잠복기를 지나 환자는 지속적인 발열과 두통, 오한, 기침, 식은땀, 식욕부진, 근육통, 권태감 등이 있으며, 발병 초기(1주 말)에 몸통에 일시적으로 피부발진(장미진, rose spot)이 나타날 수 있고, 변비, 설사 등도 나타납니다. 설사는 어린 소아에서 더 흔하며 변비는 나이가 많은 소아와 성인에게 주로 발생합니다.'
      },
      {
        id: 3,
        ques:'장티푸스의 치료는 어떻게 하나요?',
        ans:'일반적으로 충분한 휴식, 수액과 전해질 균형 유지, 적절한 식이를 제공하고, 항생제 투여로 합병증을 예방할 수 있습니다.'
      },
      {
        id: 4,
        ques:'장티푸스는 어떻게 예방하나요?',
        ans:'장티푸스 예방접종 후에 생길 수 있는 이상반응은 실제로 드뭅니다. 불활성화 백신의 경우 접종부위 통증, 발열, 부기, 발적, 경화 등이 있으며, 성인에 비해 소아에서 증상이 경미합니다. 경구용 생백신의 경우 복부팽만, 식욕부진, 소화불량, 무력감 등이 나타날 수 있으며, 설사, 구역, 구토, 두통, 피부발진, 두드러기, 오한, 관절통 등이 있습니다.'
      }
    ],
    age: [ 0, 0, 0, 0, 0, 0],
    sit: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
  }
]